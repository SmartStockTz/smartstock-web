import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MallService} from '../sevices/mall.service';
import {MallModel} from '../models/mall.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MallProduct} from '../models/mall-product';

@Injectable({
  providedIn: 'root'
})

export class MallState {
  malls: BehaviorSubject<MallModel[]> = new BehaviorSubject([]);
  products: BehaviorSubject<MallProduct[]> = new BehaviorSubject([]);
  loadMalls = new BehaviorSubject(false);
  loadProducts = new BehaviorSubject(false);
  loadMoreMalls = new BehaviorSubject(false);
  query = new BehaviorSubject('');
  private $skip = 20;

  constructor(private readonly mallsService: MallService,
              private readonly snack: MatSnackBar) {
  }

  fetchMalls(size: number, skip: number, d?: (d: boolean) => void, lm = false): void {
    if (lm === false) {
      setTimeout(() => this.loadMalls.next(true), 0);
    }
    this.mallsService.shops(size, skip, this.query.value).then(value => {
      // this.query.next('');
      if (skip === 0) {
        this.malls.next(value);
      } else {
        this.malls.value.push(...value);
        this.malls.next(this.malls.value);
      }
      if (d) {
        d(value && value.length > 0);
      }
    }).catch(reason => {
      this.snack.open(reason && reason.message ? reason.message : reason.toString(), 'Ok', {
        duration: 2000
      });
    }).finally(() => {
      if (lm === false) {
        this.loadMalls.next(false);
      }
      if (lm === true) {
        this.loadMoreMalls.next(false);
      }
    });
  }

  fetchMoreMalls(size: number): void {
    if (this.loadMoreMalls.value === true) {
      console.log('another load more loading');
      return;
    }
    this.loadMoreMalls.next(true);
    // console.log(size, 'SIZE');
    // console.log(this.$skip, 'SKIP');
    this.fetchMalls(size, this.$skip, (value) => {
      if (value === true) {
        // if (this.$skip === 0) {
        //   this.$skip = size;
        // } else {
        this.$skip += size;
        // }
      }
    }, true);
  }

  searchShop(q: string): void {
    this.query.next(q);
    this.fetchMalls(20, 0);
  }

  fetchProducts(size: number, skip: number, d?: (d: boolean) => void, lm = false): void {
    if (lm === false) {
      setTimeout(() => this.loadProducts.next(true), 0);
    }
    this.mallsService.products(size, skip, this.query.value).then(value => {
      // this.query.next('');
      if (skip === 0) {
        this.products.next(value);
      } else {
        this.products.value.push(...value);
        this.products.next(this.products.value);
      }
      if (d) {
        d(value && value.length > 0);
      }
    }).catch(reason => {
      this.snack.open(reason && reason.message ? reason.message : reason.toString(), 'Ok', {
        duration: 2000
      });
    }).finally(() => {
      if (lm === false) {
        this.loadProducts.next(false);
      }
      if (lm === true) {
        this.loadProducts.next(false);
      }
    });
  }

  fetchProductsMalls(size: number): void {
    if (this.loadProducts.value === true) {
      console.log('another load more products is loading');
      return;
    }
    this.loadProducts.next(true);
    // console.log(size, 'SIZE');
    // console.log(this.$skip, 'SKIP');
    this.fetchProducts(size, this.$skip, (value) => {
      if (value === true) {
        // if (this.$skip === 0) {
        //   this.$skip = size;
        // } else {
        this.$skip += size;
        // }
      }
    }, true);
  }

  dispose(): void {
    this.malls.next([]);
    this.products.next([]);
    this.query.next('');
  }

  searchProduct(q: string): void {
    this.query.next(q);
    this.fetchProducts(20, 0);
  }
}

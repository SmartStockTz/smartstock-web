import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MallService} from '../sevices/mall.service';
import {MallModel} from '../models/mall.model';
import {MatSnackBar} from '@angular/material/snack-bar';
import {query} from '@angular/animations';

@Injectable({
  providedIn: 'root'
})

export class MallState {
  malls: BehaviorSubject<MallModel[]> = new BehaviorSubject([]);
  loadMalls = new BehaviorSubject(false);
  loadMoreMalls = new BehaviorSubject(false);
  private query = new BehaviorSubject('');
  private $skip = 20;

  constructor(private readonly mallsService: MallService,
              private readonly snack: MatSnackBar) {
  }

  fetchMalls(size: number, skip: number, d?: (d: boolean) => void): void {
    setTimeout(() => this.loadMalls.next(true), 0);
    this.mallsService.shops(size, skip, this.query.value).then(value => {
      this.query.next('');
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
      this.loadMalls.next(false);
      this.loadMoreMalls.next(false);
    });
  }

  fetchMoreMalls(size: number): void {
    if (this.loadMoreMalls.value === true) {
      console.log('another load more loading');
      return;
    }
    this.loadMoreMalls.next(true);
    console.log(size, 'SIZE');
    console.log(this.$skip, 'SKIP');
    this.fetchMalls(size, this.$skip, (value) => {
      if (value === true) {
        // if (this.$skip === 0) {
        //   this.$skip = size;
        // } else {
        this.$skip += size;
        // }
      }
    });
  }

  searchShop(q: string): void {
    this.query.next(q);
    this.fetchMalls(20, 0);
  }
}

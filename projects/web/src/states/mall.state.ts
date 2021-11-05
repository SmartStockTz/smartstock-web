import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {MallService} from '../sevices/mall.service';
import {MallModel} from '../models/mall.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class MallState {
  malls: BehaviorSubject<MallModel[]> = new BehaviorSubject([]);
  loadMalls = new BehaviorSubject(false);

  constructor(private readonly mallsService: MallService,
              private readonly snack: MatSnackBar) {
  }

  fetchMalls(size: number, skip: number): void {
    this.loadMalls.next(true);
    this.mallsService.shops(size, skip).then(value => {
      // console.log(value);
      this.malls.next(value);
    }).catch(reason => {
      console.log(reason);
      this.snack.open(reason && reason.message ? reason.message : reason.toString(), 'Ok', {
        duration: 2000
      });
    }).finally(() => {
      this.loadMalls.next(false);
    });
  }
}

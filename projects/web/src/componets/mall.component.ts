import {Component, Input, OnInit} from '@angular/core';
import {MallModel} from '../models/mall.model';

@Component({
  selector: 'app-mall',
  template: `
    <div class="mall-container">
      <div class="mall-head">
        <img class="logo" src="{{mall.shop.ecommerce.logo}}" alt="Logo">
        <span class="name">{{mall.shop.businessName}}</span>
      </div>
      <hr class="line">
    </div>
  `,
  styleUrls: ['../styles/mall.style.scss']
})

export class MallComponent implements OnInit {
  @Input() mall: MallModel;

  constructor() {
  }

  ngOnInit(): void {
  }
}

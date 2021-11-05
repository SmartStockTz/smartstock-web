import {Component, OnInit} from '@angular/core';
import {UserService} from '@smartstocktz/core-libs';

@Component({
  selector: 'app-landing-desktop',
  template: `
    <div class="land-container">
      <app-join-promotion *ngIf="showPromo"></app-join-promotion>
      <app-malls></app-malls>
    </div>
  `,
  styleUrls: ['../styles/landing-desktop.style.scss']
})

export class LandingDesktopComponent implements OnInit {
  showPromo = false;

  constructor(public readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser().then(value => {
      this.showPromo = !(value && value.id);
    });
  }
}

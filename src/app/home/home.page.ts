import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loaded: boolean = false;
  step: number = -1;

  constructor() { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.loaded = true;
    }, 1500)
  }

}

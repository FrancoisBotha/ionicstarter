import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  detailPage:any = DetailPage;
  params: any = {
    name: "Menu Item 1",
  };

  constructor(public navCtrl: NavController) {

  }

}

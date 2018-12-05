import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  private params: any;

  private chartData: any = {
    chartDataLbl: "",
    chartDataVal: ""
  };

  private listDataElement: any = {
    listDataLbl: "",
    listDataVal: ""
  };  

  private listDataList: { date: string, amt: number }[] = [
    { "date": "30/11", "amt": 54574},
    { "date": "29/11", "amt": 38984 },
    { "date": "28/11", "amt": 38206 },
    { "date": "27/11", "amt": 32841 },
    { "date": "26/11", "amt": 39386 },
    { "date": "25/11", "amt": 0 },
    { "date": "24/11", "amt": 33840},
    { "date": "23/11", "amt": 42657 },
    { "date": "22/11", "amt": 31862 },    
    { "date": "21/11", "amt": 31371 },
    { "date": "20/11", "amt": 40741 },
    { "date": "19/11", "amt": 32207 },
    { "date": "18/11", "amt": 0 },
    { "date": "17/11", "amt": 20311 },
  ];
  
  private chartDataLbl: Array<String>;
  private chartDataVal: Array<number>;

  @ViewChild('barCanvas') barCanvas;
 
  barChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = this.navParams.data;

    this.chartDataLbl = [
      "17/11", "18/11", "19/11", "20/11", "21/11", "22/11", "23/11", 
      "24/11", "25/11", "26/11", "27/11", "28/11", "29/11", "30/11"
    ];

    this.chartDataVal = [
      20311, 0, 32207, 40741, 31371, 31862, 42657, 
      33840, 0, 39386, 32841, 38206, 38984, 54574
    ];    

    this.chartData.chartDataLbl = this.chartDataLbl;
    this.chartData.chartDataVal = this.chartDataVal;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');

    this.barChart = new Chart(this.barCanvas.nativeElement, {
 
      type: 'bar',
      data: {
          labels: this.chartData.chartDataLbl,
          datasets: [{
              label: 'Sales Value',
              data: this.chartData.chartDataVal,
              backgroundColor: 'rgba(50, 140, 193, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }

    });   
  }

}

import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "../../variables/charts";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;
  users: any = 0;
  sales: any = 0;
  orders: any = 0;
  pdfSrc: any = '';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

    this.http.get('http://localhost:8080/orders').subscribe((data) => {
      // this.orders = data.length;
    });

    this.http.get('http://localhost:8080/users').subscribe((data) => {
      // this.users = data.length;
    });

    this.http.get('http://localhost:8080/orders').subscribe((data) => {
      for (const order in data) {
        this.sales += order['totalAmount'];
      }
    });

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  }


  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }

  generateReport() {
    this.http.get('http://localhost:8081/vendors/1/reports').subscribe((data) => {
      console.log(data);
      this.pdfSrc = data;
    });
    this.pdfSrc = 'https://reservemn.usedirect.com/MinnesotaWeb/themes/Minnesota/dummy.pdf';
  }
}

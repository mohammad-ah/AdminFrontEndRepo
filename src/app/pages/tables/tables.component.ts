import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  approvedProducts: any;
  rejectedProducts: any;
  pendingProducts: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get('http://localhost:8080/api/products/approved').subscribe((data) => {
        console.log(data);
        this.approvedProducts = data;
      });

      this.http.get('http://localhost:8080/api/products/rejected').subscribe((data) => {
        console.log(data);
        this.rejectedProducts = data;
      });

      this.http.get('http://localhost:8080/api/products/pending').subscribe((data) => {
        console.log(data);
        this.pendingProducts = data;
      });
  }

  approve(id: any) {
    this.http.put('http://localhost:8080//api/warehouse/' + id + '/approve', {}).subscribe((data) => {
      console.log(data);
    });
    console.log(id);
  }

  reject(id: any) {
    console.log(id);
    this.http.put('http://localhost:8080/api/warehouse/' + id + '/reject', {}).subscribe((data) => {
      console.log(data);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  imageUrl: any = 'assets/img/theme/team-4-800x800.jpg';
  name: any = 'Team X Admin';
  username: any = 'TeamXAdmin';
  email: any = 'TeamXAdmin@elegant.com';
  street: any = '1000 N 4th Street';
  city: any = 'Fairfield';
  state: any = 'Iowa';
  zipCode: any = '52557';
  cardNo: any = '1234567890123456';
  enabled = false;
  id: any;
  pendingVendors: any;
  approvedVendors: any;
  rejectedVendors: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.pendingVendors = [{id: 1, name: 'name', email: 'email', username: 'username', cardNo: 'cardNo', image: 'assets/img/theme/team-4-800x800.jpg',
      address: {street: 'street', city: 'city', state: 'state', zipCode: 'zipCode'}}];
    this.approvedVendors = [{id: 1, name: 'name', email: 'email', username: 'username', cardNo: 'cardNo', image: 'assets/img/theme/team-4-800x800.jpg',
      address: {street: 'street', city: 'city', state: 'state', zipCode: 'zipCode'}}];
    this.rejectedVendors = [{id: 1, name: 'name', email: 'email', username: 'username', cardNo: 'cardNo', image: 'assets/img/theme/team-4-800x800.jpg',
      address: {street: 'street', city: 'city', state: 'state', zipCode: 'zipCode'}}];

    this.http.get('http://localhost:8080/admin/users/vendors/approved').subscribe((data) => {
      console.log(data);
      this.approvedVendors = data;
    });

    this.http.get('http://localhost:8080/admin/users/vendors/rejected').subscribe((data) => {
      console.log(data);
      this.rejectedVendors = data;
    });

    this.http.get('http://localhost:8080/admin/users/vendors/pending').subscribe((data) => {
      console.log(data);
      this.pendingVendors = data;
    });

  }

  approve() {
    if (this.enabled) {
      console.log('enabled');
      this.http.put('http://localhost:8080/admin/users/vendors/' + this.id + '/approve', {}).subscribe((data) => {
        console.log(data);
      });
    }
  }

  reject() {
    if (this.enabled) {
      console.log('enabled');
      this.http.put('http://localhost:8080/admin/users/vendors/' + this.id + '/reject', {}).subscribe((data) => {
        console.log(data);
      });
    }
  }

  saveId(vendor: any) {
    console.log(vendor);
    this.enabled = true;

    this.imageUrl = vendor.image;
    this.name = vendor.name;
    this.username = vendor.username;
    this.email = vendor.email;
    this.street = vendor.address.street;
    this.city = vendor.address.city;
    this.state = vendor.address.state;
    this.zipCode = vendor.address.zipCode;
    this.cardNo = vendor.cardno;
    this.id = vendor.id;
  }
}

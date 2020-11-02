import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationService} from '../../Service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(private authenticationService: AuthenticationService, private router: Router) {}


  ngOnInit(): void {
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    }
  }


  submit() {
    console.log('asdasd');
    // console.log(this.form.value.username);
    this.authenticationService.login(this.form.value.username);
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
    // if (this.form.value.username === null || this.form.value.password === null) {
    //   this.error = 'Please fill username and password';
    //   return;
    // }
    // this.error = '';
    // if (this.form.value.asAdmin !== undefined && this.form.value.asAdmin) {
    //   if (
    //     this.form.value.username === this.adminUser &&
    //     this.form.value.password === this.adminPass
    //   ) {
    //     this.router.navigateByUrl('/admin');
    //   }
    // } else {
    //   this.login(this);
    // }
  }
}

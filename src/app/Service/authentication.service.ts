import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private router: Router) { }

  public isLoggedIn(): boolean {
    console.log('auth');
    const user = localStorage.getItem('mean-name');
    console.log(user);
    if (user) {
      return user === 'TeamXAdmin';
    } else {
      return false;
    }
  }

  public login(user) {
    console.log(user);
    localStorage.setItem('mean-name', user);
  }

  public logout() {
    localStorage.removeItem('mean-name');
    this.router.navigateByUrl('/login');
  }

}


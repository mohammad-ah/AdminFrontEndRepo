import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  privacy;
  error;

	form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
	  email: new FormControl(),
  });
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.form.value);
    console.log(this.privacy);
    if (this.privacy) {
      this.http.post('http://localhost:8094/signup', this.form.value).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/dashboard');
      }, error => {
        this.error = error;
      });
    }
    this.router.navigateByUrl('/dashboard');
  }

  checkPrivacy(value: string) {
    this.privacy = value;
  }
}

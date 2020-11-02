import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './Service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'Elegant Shopping admin';
}

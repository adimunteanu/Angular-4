import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyChAV5lw-KFw6Nc5U9wfGhbv_ZTWQrj9II",
      authDomain: "ng-recipe-book-16f36.firebaseapp.com"
    });
  }
}

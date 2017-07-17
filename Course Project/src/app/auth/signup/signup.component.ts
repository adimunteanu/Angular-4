import { AuthService } from './../auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    console.log(this.form);
  }

  onSignup(form: NgForm) {
    console.log(form);
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signupUser(email, password);  
  }
}

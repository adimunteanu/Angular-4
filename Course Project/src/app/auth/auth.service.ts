import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    token: string;
    email:string;
    userLoggedIn = new Subject<string>();

    constructor(public router: Router){}

    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                (error) => console.log(error)
            );
        this.router.navigate(['/']);
    }
    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    this.userLoggedIn.next(email);
                    this.router.navigate(['/']);
                    firebase.auth().currentUser.getToken()
                        .then(
                            (token: string) => this.token = token
                        );
                }
            )
            .catch(
                error => console.log(error)
            );
    }

    logout(){
        firebase.auth().signOut();
        this.token = null;
        this.router.navigate(['/']);
    }

    EmitEmail(){
        return this.email;
    }
    getToken(){
        firebase.auth().currentUser.getToken()
            .then(
                (token: string) => this.token = token
            );
        return this.token;
    }

    isAuthenticated(){
        return this.token != null;
    }
}
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../auth/auth.service';
import { DataStorageService } from '../../shared/data-storage.service';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  constructor(public dataStorageService: DataStorageService,
              public authService: AuthService){}
  email: string;
  subscription: Subscription;
  onSaveRecipes() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => console.log(response)
      );
  }
  onFetchRecipes() {
    this.dataStorageService.getRecipes();
  }
  onLogout(){
    this.authService.logout();
  }
  ngOnInit(){
    this.subscription = this.authService.userLoggedIn.subscribe(
      (email: string) => {
        this.email = email;
      }
    )
  }
}

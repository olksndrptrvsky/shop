import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private localStorageService = inject(LocalStorageService);

  constructor() {
  }

  get isLoggedIn() {
    return this.localStorageService.getItem("userId") != null;
  }

  get isAdmin() {
    return Boolean(this.localStorageService.getItem("isAdmin"));
  }

  logInUser() {
    this.localStorageService.setItem("userId", "nonAdminId");
    this.localStorageService.removeItem("isAdmin");
  }

  logInAdmin() {
    this.localStorageService.setItem("userId", "adminId");
    this.localStorageService.setItem("isAdmin", true.toString());
  }

  logOut() {
    this.localStorageService.removeItem("userId");
    this.localStorageService.removeItem("isAdmin");
  }
}

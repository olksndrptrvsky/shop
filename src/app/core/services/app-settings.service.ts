import { Injectable, inject } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { Observable, catchError, of, retry, share, tap } from 'rxjs';
import { AppSettingsModel } from '../models/app-settings.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {
  private localStorageService = inject(LocalStorageService)
  private http = inject(HttpClient);
  private readonly appSettingsUrl = '/assets/app-settings.json';
  private readonly appSettingsKey = "AppSettings"; 

  getAppSettings() : Observable<AppSettingsModel> {
    let appSettingsModel = this.getAppSettingsFromLocalStorage();

    if (appSettingsModel) {
      return of(appSettingsModel);
    }

    return this.http.get<AppSettingsModel>(this.appSettingsUrl).pipe(
      retry(2),
      share(),
      tap((value) => {
        this.localStorageService.setItem(this.appSettingsKey, JSON.stringify(value));
      }),
      catchError((err) => {
        console.log("An error occurred during getting AppSettings", err);
        let defaultAppSettings = new AppSettingsModel();
        this.localStorageService.setItem(this.appSettingsKey, JSON.stringify(defaultAppSettings));
        return of(defaultAppSettings);
      })
    )
  }

  private getAppSettingsFromLocalStorage() : AppSettingsModel | null {
    let appSettingsValue = this.localStorageService.getItem(this.appSettingsKey);
    if (appSettingsValue) {
      return JSON.parse(appSettingsValue) as AppSettingsModel;
    }

    return null;
  }
}

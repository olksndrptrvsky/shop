import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {
  readonly App: string = "TaskManager";
  readonly Ver: string = "1.0";
  readonly ApiUrl: string = "https://funnyurl.com";
}

export const constantsService = new ConstantsService();

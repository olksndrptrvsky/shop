import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }
 
  getItem(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  removeItem(key: string): void {
    window.localStorage.removeItem(key);
  }

  clear(): void {
    window.localStorage.clear();
  }

  get length(): number {
    return window.localStorage.length;
  }
}

export const LocalStorageInstance = new LocalStorageService();
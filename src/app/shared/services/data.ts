import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data {

  private _isDarkModeActive: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  isDarkModeActive = this._isDarkModeActive.asObservable();

  public setDarkMode(data: any){
    this._isDarkModeActive.next(data);
  }
  
}

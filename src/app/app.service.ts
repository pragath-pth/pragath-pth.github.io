import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _myMethodSubject$ = new Subject<any>();
  public myMethod$ = this._myMethodSubject$.asObservable();

  constructor() { }

  public getMode(data: any) {
      // console.log(data); // I have data! Let's return it so subscribers can use it!
      this._myMethodSubject$.next(data);
  }
}

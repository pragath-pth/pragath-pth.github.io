import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import * as moment from 'moment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  isDarkMode: any;
  valueFromLS: any;
  subscription!: Subscription;
  sinceYear: any;
  whenCount: any;


  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.valueFromLS = localStorage.getItem('darkMode');
    if(this.valueFromLS === 'true'){
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }

    this.subscription = this.appService.myMethod$.subscribe((res) => {
      this.isDarkMode = res;
      // console.log(this.isDarkMode);
    });
    this.calculateDate();
  }

  calculateDate(){
    let startDate = moment("01/01/2021", "DD/MM/YYYY");
    let now = moment(new Date());
    this.whenCount = now.diff(startDate, 'days') + ' '+ 'days';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

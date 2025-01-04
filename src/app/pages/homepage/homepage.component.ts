import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import * as AOS from 'aos';
import moment from 'moment';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  isDarkMode: any;
  valueFromLS: any;
  subscription!: Subscription;
  duration: any;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    AOS.init({disable: 'mobile'});
    AOS.refresh();
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
    let now = moment(new Date());
    let startDate = moment("01/01/2021", "DD/MM/YYYY");

    var years = now.diff(startDate, 'year');
    startDate.add(years, 'years');

    var months = now.diff(startDate, 'months');
    startDate.add(months, 'months');

    var days = now.diff(startDate, 'days');
    console.log(years + ' years ' + months + ' months ' + days + ' days');
    this.duration = years+'.'+months;
    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

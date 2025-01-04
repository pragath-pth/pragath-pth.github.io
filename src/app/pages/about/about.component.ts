import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import moment from 'moment';
import * as AOS from 'aos';

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
  who =
  `{
  firstName : Pragath,
  lastName  : G \n}`;
  what = 
  `{
  profession : Front End Developer,
  expert     : Angular \n}`;
  where = 
  `{
  city  : Kollam,
  state : Kerala \n}`;
  when: any;
  why = 
  `{
  0 : passion,
  1 : dream \n}`;
  timelineData = [
    {
      qualification: "Software Engineer",
      at: "UST",
      duration: "August 2021 - Present",
      icon: "fa-solid fa-briefcase",
    },
    {
      qualification: "Freelance Developer",
      at: "VR Growing",
      duration: "January 2021 - July 2021",
      icon: "fa-solid fa-briefcase",
    },
    {
      qualification: "B.E Computer Engineering",
      at: "PSN Engineering College",
      duration: "June 2017 - November 2020",
      icon: "fa-solid fa-graduation-cap",
    },
    {
      qualification: "Diploma in Computering Engineering",
      at: "PSN Polytechnic College",
      duration: "June 2014 - Apri 2017",
      icon: "fa-solid fa-graduation-cap",
    }
  ];


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
    let startDate = moment("01/01/2021", "DD/MM/YYYY");
    let now = moment(new Date());
    this.whenCount = now.diff(startDate, 'days') + ' '+ 'days';
    this.when = 
    `{\n  duration     : 2021 - Present,\n  numberOfDays : ${this.whenCount} \n}`;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

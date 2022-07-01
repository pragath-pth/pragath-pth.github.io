import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { faUser, faClock } from '@fortawesome/free-regular-svg-icons';
import { faCode, faLocationCrosshairs, faComputer, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { PrimeIcons } from "primeng/api";
import * as moment from 'moment';
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
  faUser = faUser;
  faCode = faCode;
  faLocationCrosshairs = faLocationCrosshairs;
  faClock = faClock;
  faComputer = faComputer;
  faBriefcase = faBriefcase;
  faGraduationCap= faGraduationCap;
  who =
`{
  firstName : Pragath,
  lastName  : G
}`;
what = 
`{
  profession : Front End Developer,
  expert     : Angular 
}`;
where = 
`{
  city  : Kollam,
  state : Kerala 
}`;
when: any;
why = 
`{
  0 : passion,
  1 : dream
}`;
timelineData = [
  {
    qualification: "Software Engineer",
    at: "UST",
    duration: "August 2021 - Present",
    icon: faBriefcase,
  },
  {
    qualification: "Freelance Developer",
    at: "VR Growing",
    duration: "January 2021 - July 2021",
    icon: faBriefcase,
  },
  {
    qualification: "B.E Computer Engineering",
    at: "PSN Engineering College",
    duration: "June 2017 - November 2020",
    icon: faGraduationCap,
  },
  {
    qualification: "Diploma in Computering Engineering",
    at: "PSN Polytechnic College",
    duration: "June 2014 - Apri 2017",
    icon: faGraduationCap,
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
`{
  duration     : 2021 - Present,
  numberOfDays : ${this.whenCount}
}`;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

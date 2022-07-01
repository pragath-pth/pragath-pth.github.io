import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  isDarkMode: any;
  valueFromLS: any;
  subscription!: Subscription;

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
    });
  }

}

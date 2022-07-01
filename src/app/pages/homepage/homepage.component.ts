import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import * as AOS from 'aos';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faFile = faFile;
  faFileInvoice = faFileInvoice;
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
      // console.log(this.isDarkMode);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

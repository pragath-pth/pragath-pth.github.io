import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  year: any;
  isDarkMode: any;
  valueFromLS: any;
  subscription!: Subscription;
  loveToggled: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear();
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

  toggleHeart(){
    this.loveToggled = !this.loveToggled;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

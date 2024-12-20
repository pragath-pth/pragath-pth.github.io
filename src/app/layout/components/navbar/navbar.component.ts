import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isDarkMode:any ;
  storedTheme = localStorage.getItem('darkMode');

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.loadTheme();
  }

  loadTheme(){
    this.storedTheme = localStorage.getItem('darkMode');
    if(this.storedTheme === 'true'){
      this.isDarkMode = true;
    } else {
      this.isDarkMode = false;
    }
  }

  toggleTheme(){
    this.appService.getMode(this.isDarkMode);
    if(this.isDarkMode){
      localStorage.setItem('darkMode','true');
      this.storedTheme = localStorage.getItem('darkMode');
    } else {
      localStorage.setItem('darkMode','false');
      this.storedTheme = localStorage.getItem('darkMode');
    }
  }

}

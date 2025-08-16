import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Data } from '../../services/data';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule, FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header implements OnInit {

  menuList: any = [
    {
      menuName: 'Home',
      menuRoute: '/',
      menuIcon: 'fa-house-chimney-crack',
      isActive: true,
    },
    {
      menuName: 'Skills',
      menuRoute: '/skills',
      menuIcon: 'fa-laptop-code',
      isActive: false, 
    },
    {
      menuName: 'Works',
      menuRoute: '/works',
      menuIcon: 'fa-hammer',
      isActive: false, 
    },
    {
      menuName: 'About',
      menuRoute: '/about',
      menuIcon: 'fa-rectangle-list',
      isActive: false,  
    },
    {
      menuName: 'Contact',
      menuRoute: '/contact',
      menuIcon: 'fa-phone-volume',
      isActive: false,  
    }
  ]
  isDarkMode: boolean = false;
  storedTheme = localStorage.getItem('darkMode');

  constructor(private dataService: Data){ }

  ngOnInit() {
    console.log(this.storedTheme);
    if(this.storedTheme && this.storedTheme === 'true'){
      this.isDarkMode = true;
    } else if(this.storedTheme && this.storedTheme === 'false'){
      this.isDarkMode = false;
    }
    this.dataService.setDarkMode(this.isDarkMode);
  }

  navigateToRoute(index: any){
    this.menuList.forEach((el: any) => {
      el['isActive'] = false;
    });
    this.menuList[index].isActive = true;
  }

  toggleTheme(){
    if(this.isDarkMode){
      localStorage.setItem('darkMode','true');
    } else {
      localStorage.setItem('darkMode','false');
    }
    console.log(this.isDarkMode)
    this.dataService.setDarkMode(this.isDarkMode);
  }

}

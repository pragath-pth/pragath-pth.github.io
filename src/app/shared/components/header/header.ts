import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../services/theme-service';
import { map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [
    CommonModule, FormsModule
  ],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header implements OnInit {

  isDarkMode: boolean = false;
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
      menuIcon: 'fa-briefcase',
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

  constructor(private themeService: ThemeService, private destroyRef: DestroyRef){ }

  ngOnInit() {
    this.themeService.currentTheme.pipe(map(theme => theme === 'dark'),takeUntilDestroyed(this.destroyRef)).subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }

  navigateToRoute(index: any){
    this.menuList.forEach((el: any) => {
      el['isActive'] = false;
    });
    this.menuList[index].isActive = true;
  }

  switchThemeMode(){
    this.themeService.toggleTheme();
  }

}


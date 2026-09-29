import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme-service';
import { filter, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [
    CommonModule, FormsModule, RouterModule, RouterLink, RouterLinkActive
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

  constructor(
    private themeService: ThemeService,
    private destroyRef: DestroyRef,
    private router: Router
  ){ }

  ngOnInit() {
    this.themeService.currentTheme.pipe(map(theme => theme === 'dark'),takeUntilDestroyed(this.destroyRef)).subscribe(isDark => {
      this.isDarkMode = isDark;
    });

    this.updateActiveMenu(this.router.url);

    this.router.events
      .pipe(
        filter((e): e is NavigationEnd => e instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((e) => {
        this.updateActiveMenu(e.urlAfterRedirects || e.url);
      });
  }

  private updateActiveMenu(url: string) {
    const cleanUrl = url.split('?')[0];
    this.menuList.forEach((el: any) => {
      if (el.menuRoute === '/') {
        el.isActive = cleanUrl === '/' || cleanUrl === '';
      } else {
        el.isActive = cleanUrl === el.menuRoute || cleanUrl.startsWith(el.menuRoute + '/');
      }
    });
  }

  navigateToRoute(index: any){
    this.menuList.forEach((el: any) => {
      el['isActive'] = false;
    });
    this.menuList[index].isActive = true;
    this.router.navigate([this.menuList[index].menuRoute]);
  }

  switchThemeMode(){
    this.themeService.toggleTheme();
  }

}


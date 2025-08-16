import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { Data } from './shared/services/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    Header, Footer,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit, OnDestroy{
  protected readonly title = signal('pragath-pth');
  isDarkMode: boolean = false;
  darkModeInputSubscription!: Subscription;

  constructor(public router: Router, private meta: Meta, private dataService: Data){ }

  ngOnInit() {
    this.meta.updateTag({ name: 'pragathpth', content: 'My Personal Portfolio' });
    
    this.darkModeInputSubscription = this.dataService.isDarkModeActive.subscribe({
      next: res => {
        console.log(res);
        if(res !== null){
          this.isDarkMode = res;
        }
      },
      error: error => {
        this.isDarkMode = false;
      }
    })
  }

  ngOnDestroy() {
    this.darkModeInputSubscription.unsubscribe();
  }
}

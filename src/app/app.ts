import { Component, DestroyRef, OnDestroy, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { map, Subscription } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ThemeService } from './shared/services/theme-service';


@Component({
  imports: [RouterOutlet, Header, Footer, CommonModule],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('pragath-pth');
  isDarkMode: boolean = false;

  constructor(public router: Router, private meta: Meta, private themeService: ThemeService, private destroyRef: DestroyRef){ }

  ngOnInit() {
    this.meta.updateTag({ name: 'pragathpth', content: 'My Personal Portfolio' });
    
    this.themeService.currentTheme.pipe(map(theme => theme === 'dark'),takeUntilDestroyed(this.destroyRef)).subscribe(isDark => {
      this.isDarkMode = isDark;
    });
  }
}

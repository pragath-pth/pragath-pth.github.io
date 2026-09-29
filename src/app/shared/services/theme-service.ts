import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Service()
export class ThemeService {
  private _currentTheme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>('light');
  currentTheme = this._currentTheme.asObservable();

  constructor() {
    const storedTheme = localStorage.getItem('theme') as Theme;
    if (storedTheme) {
      this.setTheme(storedTheme);
      this.setThemeClass(storedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const initialTheme: Theme = prefersDark ? 'dark' : 'light';
      this.setTheme(initialTheme);
      this.setThemeClass(initialTheme);
    }
  }

  public setTheme(theme: Theme) {
    this._currentTheme.next(theme);
    localStorage.setItem('theme', theme);
  }

  toggleTheme() {
    const newTheme: Theme = this._currentTheme.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
    this.setThemeClass(newTheme);
  }

  getCurrentTheme(): Theme {
    return this._currentTheme.value;
  }

  isDarkMode(): boolean {
    return this._currentTheme.value === 'dark';
  }

  setThemeClass(theme: Theme) {
    document.body.classList.toggle('dark-mode', theme !== 'light');
  }
}

import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_KEY = 'app-theme';
  private platformId = inject(PLATFORM_ID);
  
  // Reactive Signal for theme state
  public isDarkMode = signal<boolean>(this.getInitialTheme());

  constructor() {
    // Reactive effect to handle side effects of theme changes
    effect(() => {
      const isDark = this.isDarkMode();
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
        this.applyThemeToBody(isDark);
      }
    });
  }

  public toggleTheme(): void {
    this.isDarkMode.update(dark => !dark);
  }

  private getInitialTheme(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.THEME_KEY);
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  }

  private applyThemeToBody(isDark: boolean): void {
    const body = document.body;
    if (isDark) {
      body.classList.add('dark-theme');
      body.classList.remove('light-theme');
    } else {
      body.classList.add('light-theme');
      body.classList.remove('dark-theme');
    }
  }
}

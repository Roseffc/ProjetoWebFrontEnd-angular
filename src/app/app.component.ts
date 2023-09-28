import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto-web-front-end-angular';

  private static readonly DARK_THEME_CLASS = 'dark-theme';


  public theme = '';

  constructor(@Inject(DOCUMENT) private document: Document) {}

  public selectLightTheme(): void {
    this.document.documentElement.classList.add(AppComponent.DARK_THEME_CLASS);

  }

  public selectDarkTheme(): void {
      this.document.documentElement.classList.remove(AppComponent.DARK_THEME_CLASS);

  }
}

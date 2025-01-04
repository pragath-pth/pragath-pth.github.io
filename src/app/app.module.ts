import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './layout/components/navbar/navbar.module';
import { FooterModule } from './layout/components/footer/footer.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AboutModule } from './pages/about/about.module';
import { ContactModule } from './pages/contact/contact.module';
import { SkillsModule } from './pages/skills/skills.module';
import { WorksModule } from './pages/works/works.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MyPreset } from './app-theme-preset';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    ErrorPageModule,
    HomepageModule,
    AboutModule,
    ContactModule,
    SkillsModule,
    WorksModule,
    NgbModule

  ],
  providers: [
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: MyPreset,
            options: {
              prefix: 'p',
              darkModeSelector: ".dark-mode",
              cssLayer: false
            }
        }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
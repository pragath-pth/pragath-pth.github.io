import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarModule } from './layout/components/navbar/navbar.module';
import { FooterModule } from './layout/components/footer/footer.module';
import { ErrorPageModule } from './pages/error-page/error-page.module';
import { HomepageModule } from './pages/homepage/homepage.module';
import { AboutModule } from './pages/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NavbarModule,
    FooterModule,
    ErrorPageModule,
    HomepageModule,
    AboutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

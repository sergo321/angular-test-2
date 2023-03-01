import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestComponent } from './test/test.component';
import { NgImageSliderModule } from 'ng-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    NotfoundComponent,
    AboutComponent,
    ContactComponent,
    TestComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,NgImageSliderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

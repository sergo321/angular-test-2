import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomepageComponent,
  AboutComponent,
  ContactComponent,
  NotfoundComponent,
} from './app-routing.module';
export * from './homepage/homepage.component';
export * from './about/about.component';
export * from './contact/contact.component';
export * from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

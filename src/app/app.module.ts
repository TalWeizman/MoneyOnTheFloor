import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProtfulioComponent } from './protfulio/protfulio.component';
import { SliderComponent } from './slider/slider.component';
import { AddComponent } from './add/add.component';
import { UICarouselModule } from "ui-carousel";
import { ChatboxComponent } from './chatbox/chatbox.component';
import { PromoComponent } from './promo/promo.component';
import { CardComponent } from './card/card.component';
import { ClientsComponent } from './clients/clients.component';
import { ScrollToModule } from 'ng2-scroll-to';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutusComponent,
    ProtfulioComponent,
    SliderComponent,
    AddComponent,
    ChatboxComponent,
    PromoComponent,
    CardComponent,
    ClientsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    UICarouselModule,
    ScrollToModule.forRoot(),
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProtfulioComponent]

})
export class AppModule { }

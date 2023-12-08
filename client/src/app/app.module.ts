import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FAQComponent } from './pages/faq/faq.component';
import { AddComponent } from './track/add/add.component';
import { EditComponent } from './track/edit/edit.component';
import { ListComponent } from './track/list/list.component';
import { TrackService } from './services/track.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FAQComponent,
    AddComponent,
    EditComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule to imports
    HttpClientModule // Add HttpClientModule to imports
  ],
  providers: [
    TrackService // Add your service here
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

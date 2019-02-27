import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {Angular2PhotoswipeModule} from 'angular2_photoswipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSortModule} from '@angular/material/sort';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OwlModule,
    FontAwesomeModule,
    Angular2PhotoswipeModule,
    BrowserAnimationsModule,
    MatSortModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSQj5_WSgsS4l6m00PAFDfSmbJ7T7XPTk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

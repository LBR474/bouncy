import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AngularThreeNGTModule } from './angular-three-ngt/angular-three-ngt.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularThreeNGTModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

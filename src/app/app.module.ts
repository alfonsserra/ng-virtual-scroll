import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations:    [
    AppComponent,
    SampleComponent
  ],
  imports:         [
    BrowserModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
  providers:       [],
  bootstrap:       [AppComponent],
  entryComponents: []
})
export class AppModule {
}

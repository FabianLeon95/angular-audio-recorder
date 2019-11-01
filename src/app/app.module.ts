import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AudioRecorderService } from './services/audio-recorder.service';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AudioRecorderService],
  bootstrap: [AppComponent]
})
export class AppModule { }

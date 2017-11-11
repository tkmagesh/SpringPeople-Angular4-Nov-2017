import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , TrimTextPipe
    , ClosedCountPipe
    , SortPipe
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

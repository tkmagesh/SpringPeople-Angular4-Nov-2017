import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component';
import { BugStatsComponent } from './bugTracker/views/bugStats.component';
import { BugEditComponent } from './bugTracker/views/bugEdit.component';


import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';


import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';
import { BugServerService } from './bugTracker/services/bugServer.serivce';

import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent
    , BugTrackerComponent
    , ClosedCountPipe
    , BugStatsComponent
    , BugEditComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , UtilsModule
    , HttpModule
  ],
  providers: [
    BugOperationsService
    , BugStorageService
    , BugServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

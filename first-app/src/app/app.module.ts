import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreeterComponent} from './greeter/greeter.component';
import { MathCalculator1Component } from './math-calculator/mathCalculator1.component';
import { MathCalculator2Component } from './math-calculator/mathCalculator2.component';
import { MathResultComponent } from './math-calculator/mathResult.component';
import { ListerComponent } from './listing/lister.component';


@NgModule({
  declarations: [
    AppComponent
    , GreeterComponent
    , MathCalculator1Component
    , MathCalculator2Component
    , MathResultComponent
    , ListerComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

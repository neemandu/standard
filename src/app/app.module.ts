import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* import AmplifyUIAngularModule  */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { MarketingComponent } from './marketing/marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    MarketingComponent, 
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* configure app with AmplifyUIAngularModule */
    AmplifyUIAngularModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

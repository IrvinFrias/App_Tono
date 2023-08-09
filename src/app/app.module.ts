import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {SharedViewsModule} from "./shared-views/shared-views.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        SharedViewsModule,
        NgbModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

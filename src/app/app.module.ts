import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarabellaComponent } from './clarabella/clarabella.component';
import { PippoComponent } from './pippo/pippo.component';

@NgModule({
  declarations: [
    AppComponent,
    ClarabellaComponent,
    PippoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

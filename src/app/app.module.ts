import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material.module';
import {JsonSkillsService} from './services/json-skills.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,MyOwnCustomMaterialModuleModule,HttpClientModule
  ],
  providers: [HttpClient,JsonSkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

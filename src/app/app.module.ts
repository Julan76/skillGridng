import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent, SnackBarOverviewExampleComponent} from './app.component';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material.module';
import {JsonSkillsService} from './services/json-skills.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DialogOverviewExampleDialogComponent, DomainDetailComponent} from './domain-detail/domain-detail.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DomainDetailComponent,
    DialogOverviewExampleDialogComponent,SnackBarOverviewExampleComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,SnackBarOverviewExampleComponent
  ],

  imports: [
    BrowserModule,MyOwnCustomMaterialModuleModule,HttpClientModule,FormsModule,
  ],
  providers: [HttpClient,JsonSkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {AppComponent, SnackBarOverviewExampleComponent} from './app.component';
import {MyOwnCustomMaterialModuleModule} from './my-own-custom-material.module';
import {JsonSkillsService} from './services/json-skills.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DialogOverviewExampleDialogComponent, DomainDetailComponent} from './domain-detail/domain-detail.component';
import {FormsModule} from '@angular/forms';
import {DomainService} from './services/domain.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';


@NgModule({
  declarations: [
    AppComponent,
    DomainDetailComponent,
    DialogOverviewExampleDialogComponent,SnackBarOverviewExampleComponent, MessagesComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent,SnackBarOverviewExampleComponent
  ],

  imports: [
    BrowserModule,MyOwnCustomMaterialModuleModule,HttpClientModule,FormsModule,
  ],
  providers: [HttpClient,JsonSkillsService,DomainService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

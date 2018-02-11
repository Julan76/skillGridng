import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatFormFieldModule,
  MatGridListModule, MatIconModule, MatInputModule, MatMenuModule,MatTableModule,MatCheckboxModule,
  MatProgressSpinnerModule,MatRadioModule,
  MatToolbarModule, MatTooltipModule,MatDialogModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [MatButtonModule,MatToolbarModule,BrowserAnimationsModule,MatProgressSpinnerModule,MatTableModule,MatCheckboxModule,MatRadioModule,MatDialogModule,
    MatCardModule,MatFormFieldModule,MatInputModule
    ,MatMenuModule,MatIconModule,MatGridListModule,MatTooltipModule],
  exports: [MatButtonModule,MatToolbarModule,BrowserAnimationsModule,MatProgressSpinnerModule,MatTableModule,MatCheckboxModule,MatRadioModule,MatDialogModule,
    MatCardModule,MatFormFieldModule,
    MatInputModule,MatMenuModule,MatIconModule,MatGridListModule,MatTooltipModule],
  declarations: []
})
export class MyOwnCustomMaterialModuleModule {

}

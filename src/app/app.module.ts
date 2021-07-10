import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
//import pdfviewer module
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { UserInputComponent } from './user-input/user-input.component';
//import file upload module
import { FileUploadModule  } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    UserInputComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule,
    FormsModule,
    FileUploadModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

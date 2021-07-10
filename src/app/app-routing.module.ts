import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

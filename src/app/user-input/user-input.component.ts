import { Component, EventEmitter, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {
  
  uploader !: FileUploader;
  textToTranslate !: string;

  showdoc = false;

  pdfSrc = "";
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected() {
    let $img: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      let reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
  
      reader.readAsArrayBuffer($img.files[0]);
    }
  }
  
  translateText(){
    console.log(this.textToTranslate);
  }

  // showPdf(){
  //   if(this.showdoc === true){
  //     this.showdoc = false;
  //   }else{
  //     this.showdoc = true;
  //   }
  // }
}

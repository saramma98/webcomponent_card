import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  //selector: 'app-bcard',
  templateUrl: './bcard.component.html',
  styleUrls: ['./bcard.component.css']
})
export class BcardComponent implements OnInit {

  @Input() title;
  @Input() text;
  @Input() button_name;
  @Input() image_path;
  baseImage :SafeUrl;

  @Output() display = new EventEmitter();
  @Input() fname;
  @Input() occupation;
  @Input() location;


  constructor( private domsanitizer :DomSanitizer) {
   }

  ngOnInit(): void {   
  }

  // getbaseImage(){
  //  console.log("image_path " +this.image_path);
  //   this.baseImage = this.domsanitizer.bypassSecurityTrustUrl(this.image_path);
  //     console.log( this.baseImage);
  //     return this.baseImage;

  // }
  showDetails(){
    console.log("wdd");
    console.log(this.display);
    this.display.emit(`Name: ${this.fname}
     Occupation:${this.occupation}
     Based In: ${this.location}`);
    }
}

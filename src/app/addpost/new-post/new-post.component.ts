
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  @Output() postAdded = new EventEmitter();
  //postFormGroup:FormGroup;
  title:string="";
  content:string="";

  constructor(){

  }


  addComment(){
    console.log(this.title, this.content);
    this.postAdded.emit({title: this.title, content:this.content});
  }
}

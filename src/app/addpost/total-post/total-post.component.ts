import { Component, Input } from '@angular/core';
import { Post } from '../posts';


@Component({
  selector: 'app-total-post',
  templateUrl: './total-post.component.html',
  styleUrls: ['./total-post.component.css']
})
export class TotalPostComponent {

  @Input() post: Post[] = [];



}

import { Component } from '@angular/core';
import { Post } from './posts';


@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent {

    count:number=0;
    PostList: Post[] =[];


    displayNewPost(Post: Post){
      this.PostList.push(Post)
      this.count++;
    }
}

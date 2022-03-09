import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  public posts = Array();
  p: any;
  constructor(private _postService: PostsService) { }

  ngOnInit(): void {
    this._postService.getPosts()
      .subscribe(data => this.posts = data);
  }

}

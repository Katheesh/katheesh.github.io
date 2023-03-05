import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts:any;

  constructor(private http:HttpService) {}
   
  ngOnInit() {
    this.http.getPosts().subscribe(response => {
      this.posts = response;
      console.log(this.posts);
      
    });
  }

}

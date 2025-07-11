import { Component, Input } from '@angular/core';
import { BlogArticle } from "../blog-article/blog-article";

@Component({
  selector: 'blog-list',
  standalone: true,
  imports: [BlogArticle],
  templateUrl: './blog-list.html',
  styleUrls: ['./blog-list.css']
})
export class BlogListComponent {
  @Input() postsList: BlogPost[] = [];
}

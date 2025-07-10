import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-list',
  standalone: true,
  imports: [],
  templateUrl: './blog-list.html',
  styleUrls: ['./blog-list.css']
})
export class BlogListComponent {
  @Input() postsList: BlogPost[] = [];
}

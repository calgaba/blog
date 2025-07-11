import { Component, Input } from '@angular/core';

@Component({
  selector: 'blog-article',
  imports: [],
  templateUrl: './blog-article.html',
  styleUrl: './blog-article.css'
})
export class BlogArticle {
    @Input() article!: BlogPost;
}

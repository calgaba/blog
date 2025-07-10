import { Component } from '@angular/core';
import { BlogListComponent } from "../components/blog-list/blog-list";
import { BlogFormComponent } from "../components/blog-form/blog-form";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [BlogListComponent, BlogFormComponent],
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'],
})
export class BlogComponent {
  postsList: BlogPost[] = [
    {
      title: 'Primera noticia',
      image: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=800&q=80',
      content: 'Esta es la primera noticia del blog.',
      date: '2025-07-01'
    },
    {
      title: 'Segunda noticia',
      image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      content: 'Esta es la segunda noticia del blog.',
      date: '2025-07-02'
    }
  ];


  onNewPost(post: BlogPost) {
    this.postsList = [post, ...this.postsList]; // crea una nueva copia para que Angular detecte el cambio
  }
}

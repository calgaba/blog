import { Component } from '@angular/core';
import { BlogComponent } from "./blog/pages/blog";

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'news-blog';
}

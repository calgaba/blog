import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'blog-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-form.html',
  styleUrls: ['./blog-form.css']
})
export class BlogFormComponent {

  @Output() postCreated = new EventEmitter<BlogPost>();

  newPost: BlogPost = {
    title: '',
    image: '',
    content: '',
    date: ''
  };

  formError = '';
  errorFields = [false, false, false, false];

  addPost() {
    if (!this.validateForm()) return;

    this.postCreated.emit({ ...this.newPost });

    this.newPost = { title: '', image: '', content: '', date: '' };
    this.formError = '';
    this.errorFields = [false, false, false, false];
  }

  validateForm(): boolean {
    const { title, image, content, date } = this.newPost;

    this.errorFields = [
      !title.trim(),
      !image.trim(),
      !content.trim(),
      !date.trim()
    ];

    const hasErrors = this.errorFields.some(field => field);
    if (hasErrors) {
      this.formError = 'Todos los campos son obligatorios.';
    }

    return !hasErrors;
  }

  updateField(index: number, value: string) {
    this.errorFields[index] = !value.trim();
    if (this.errorFields.every(e => !e)) {
      this.formError = '';
    }
  }
}

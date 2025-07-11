import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { updateFieldValidation, validateBlogPost } from '../../utils/form-validator';

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
    const result = validateBlogPost(this.newPost);

    this.errorFields = result.errorFields;
    this.formError = result.errorMessage;

    if (!result.valid) return;

    this.postCreated.emit({ ...this.newPost });

    this.initVariables();
  }

  initVariables() {
    this.newPost = { title: '', image: '', content: '', date: '' };
    this.errorFields = [false, false, false, false];
    this.formError = '';
  }

  updateField(index: number, value: string) {
    this.errorFields[index] = updateFieldValidation(value);
    if (this.errorFields.every(e => !e)) {
      this.formError = '';
    }
  }
}

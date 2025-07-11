

export function validateBlogPost(post: BlogPost): { valid: boolean; errorFields: boolean[]; errorMessage: string } {
  const fields = [post.title, post.image, post.content, post.date];

  const errorFields = fields.map(field => !field.trim());
  const valid = !errorFields.some(e => e);
  const errorMessage = valid ? '' : 'Todos los campos son obligatorios.';

  return { valid, errorFields, errorMessage };
}

export function updateFieldValidation(value: string): boolean {
  return !value.trim();
}

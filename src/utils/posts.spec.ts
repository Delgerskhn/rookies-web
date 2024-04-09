import { findPostBySlug } from './posts';

describe('findPostBySlug', () => {
  it('should return null if slug is not provided', async () => {
    const result = await findPostBySlug('');
    expect(result).toBeNull();
  });

  it('should return null if file is not found', async () => {
    const result = await findPostBySlug('non-existent-slug');
    expect(result).toBeNull();
  });

  it('should return post object if file is found', async () => {
    const slug = 'post-bank-account-detection'; // Assuming you have a test file with this slug
    const result = await findPostBySlug(slug);
    expect(result).toEqual(expect.objectContaining({ slug }));
    // You may need to adjust this expectation based on the structure of your returned post object
  });
});

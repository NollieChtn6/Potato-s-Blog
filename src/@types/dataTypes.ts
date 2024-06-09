export interface PostInterface {
  id: number;
  categoryid: number;
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  categoryname: string;
  categoryslug: string;
  created_at: string;
}

export interface CategoryInterface {
  id: number;
  slug: string;
  name: string;
  description: string;
}

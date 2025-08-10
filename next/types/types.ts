export interface Category {
  name: string;
}

export interface Image {
  url: string;
  alternativeText: string;
}

export interface Article {
  id: number;
  title: string;
  description: string;
  slug: string;
  content?: any; // Made flexible for our hardcoded content structure
  dynamic_zone?: any[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt: string;
  locale?: string;
  image?: Image;
  categories?: Category[];
  localizations?: any[];
}
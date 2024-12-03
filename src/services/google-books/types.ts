export interface ImageLinks {
  smallThumbnail?: string;
  thumbnail?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
}

export interface SearchVolume {
  id: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    imageLinks?: ImageLinks;
  };
}

export interface SearchResults {
  totalItems: number;
  items?: SearchVolume[];
}

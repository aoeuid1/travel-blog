import data from './images.json';

export interface Image {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export const Images: Image[] = data.images;

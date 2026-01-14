export type Dimensions = {
  width?: String;
  height?: String;
};

export type Artwork = {
  id: string;
  title: string;
  year?: number;
  medium: string;
  availability: boolean;
  dimensions?: Dimensions;
  image: string;
  blur: string;
};

export type Collection = {
  slug: string;
  title: string;
  artworks: Artwork[];
};

export type MovieForm = {
  title: string;
  publishingYear: string;
};

type MovieDataPayload = {
  name: string;
  publishingYear: number;
};

export type Movie = {
  data: MovieDataPayload;
  files: { poster: string };
};

type AttributeArray = {
  name: string;
  publicationYear: number;
  poster: { data: string | undefined };
};

type MovieItem = {
  id: number;
  attributes: AttributeArray;
};

export type MovieData = {
  data: { data: Array<MovieItem> };
};

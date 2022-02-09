export type MovieForm = {
  title: string;
  publishingYear: string;
};

export type Movie = {
  data: MovieForm;
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

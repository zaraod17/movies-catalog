export type JsonData = {
  movies: [
    {
      id: number | string;
      title: string;
      imgUrl: string;
      productionYear: number;
      numberOfRatings: number;
      sumOfRatings: number;
      description: string;
      trailerUrl: string;
      actors: string[];
      categories: String[];
      views: number;
    }
  ];
  users: [];
};

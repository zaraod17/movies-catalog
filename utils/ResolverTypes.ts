export type JsonData = {
  movies: [
    {
      id: Number | String;
      title: String;
      imgUrl: String;
      productionYear: Number;
      numberOfRatings: Number;
      sumOfRatings: Number;
      description: String;
      trailerUrl: String;
      actors: String[];
      categories: String[];
      views: Number;
    }
  ];
  users: [];
};

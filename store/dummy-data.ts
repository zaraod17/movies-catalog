type Movies = {
  id: string | number;
  title: string;
  imgUrl: string;
  productionYear: number;
  numberOfRatings: number;
  sumOfRatings: number;
  description: string;
  trailerUrl: string;
}[];

export const DYMMY_MOVIES: Movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    imgUrl: "https://example.com/shawshank_redemption.jpg",
    productionYear: 1994,
    numberOfRatings: 1500,
    sumOfRatings: 7500,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailerUrl: "https://youtube.com/watch?v=6hB3S9bIaco",
  },
  {
    id: 2,
    title: "The Godfather",
    imgUrl: "https://example.com/godfather.jpg",
    productionYear: 1972,
    numberOfRatings: 1800,
    sumOfRatings: 9000,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    trailerUrl: "https://youtube.com/watch?v=sY1S34973zA",
  },
  {
    id: 3,
    title: "Pulp Fiction",
    imgUrl: "https://example.com/pulp_fiction.jpg",
    productionYear: 1994,
    numberOfRatings: 2100,
    sumOfRatings: 10500,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    trailerUrl: "https://youtube.com/watch?v=s7EdQ4FqbhY",
  },
  {
    id: 4,
    title: "The Dark Knight",
    imgUrl: "https://example.com/dark_knight.jpg",
    productionYear: 2008,
    numberOfRatings: 2300,
    sumOfRatings: 11500,
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    trailerUrl: "https://youtube.com/watch?v=kmJLuwP3MbY",
  },
  {
    id: 5,
    title: "Forrest Gump",
    imgUrl: "https://example.com/forrest_gump.jpg",
    productionYear: 1994,
    numberOfRatings: 1900,
    sumOfRatings: 9500,
    description:
      "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
    trailerUrl: "https://youtube.com/watch?v=bLvqoHBptjg",
  },
  {
    id: 6,
    title: "Star Wars: Episode V - The Empire Strikes Back",
    imgUrl: "https://example.com/empire_strikes_back.jpg",
    productionYear: 1980,
    numberOfRatings: 1700,
    sumOfRatings: 8500,
    description:
      "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader.",
    trailerUrl: "https://youtube.com/watch?v=JNwNXF9Y6kY",
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    imgUrl: "https://example.com/shawshank_redemption.jpg",
    productionYear: 1994,
    numberOfRatings: 3000,
    sumOfRatings: 15000,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    trailerUrl: "https://youtube.com/watch?v=6hB3S9bIaco",
  },
  {
    id: 8,
    title: "The Matrix",
    imgUrl: "https://example.com/the_matrix.jpg",
    productionYear: 1999,
    numberOfRatings: 2200,
    sumOfRatings: 11000,
    description:
      "A computer programmer discovers that his reality is not what it seems, and he joins a group of rebels to fight against the machines that control humanity.",
    trailerUrl: "https://youtube.com/watch?v=m8e-FF8MsqU",
  },
  {
    id: 9,
    title: "Inception",
    imgUrl: "https://example.com/inception.jpg",
    productionYear: 2010,
    numberOfRatings: 2500,
    sumOfRatings: 12500,
    description:
      "A skilled thief who steals information by infiltrating the subconscious mind is given a chance to have his criminal history erased if he can successfully plant an idea in a target's mind.",
    trailerUrl: "https://youtube.com/watch?v=YoHD9XEInc0",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    imgUrl: "https://example.com/fellowship_of_the_ring.jpg",
    productionYear: 2001,
    numberOfRatings: 2000,
    sumOfRatings: 10000,
    description:
      "A young hobbit and his companions set out on a journey to destroy a powerful ring and save Middle-earth from the Dark Lord Sauron.",
    trailerUrl: "https://youtube.com/watch?v=V75dMMIW2B4",
  },
];

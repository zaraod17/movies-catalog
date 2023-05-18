export interface MoviesGridItemsProps {
  id: string | number;
  title: string;
  imgUrl: string;
  productionYear: number;
  numberOfRatings: number;
  sumOfRatings: number;
  description: string;
  trailerUrl: string;
  actors: string[];
  categories: string[];
}

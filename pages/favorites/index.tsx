import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

import { DUMMY_MOVIES } from "@/data/dummy-data";

const FavoritesPage: React.FC = () => {
  return <MoviesGrid items={DUMMY_MOVIES} />;
};

export default FavoritesPage;

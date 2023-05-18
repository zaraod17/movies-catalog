import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

import { DUMMY_MOVIES } from "@/data/dummy-data";

const WatchListPage: React.FC = () => {
  return (
    <>
      <MoviesGrid items={DUMMY_MOVIES} />
    </>
  );
};

export default WatchListPage;

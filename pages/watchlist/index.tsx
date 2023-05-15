import MoviesGrid from "@/components/MoviesGrid/MoviesGrid";

import { itemData } from "@/data/dummy-data";

const WatchListPage: React.FC = () => {
  return (
    <>
      <div>Watch list page</div>
      <MoviesGrid items={itemData}/>
    </>
  );
};

export default WatchListPage;

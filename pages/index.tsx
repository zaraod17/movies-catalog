import { useQuery, gql } from "@apollo/client";
import { CircularProgress } from "@mui/material";

import MainPageLists from "@/components/MainPageLists/MainPageLists";

const GET_MOVIES = gql`
  query Query {
    getMovies {
      title
    }
  }
`;

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <MainPageLists />
    </>
  );
};

export default Home;

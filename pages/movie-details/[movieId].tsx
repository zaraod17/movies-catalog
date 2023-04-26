import MovieDetails from "@/components/MovieDetails/MovieDetails";
import { useRouter } from "next/router";

import { GetServerSideProps } from "next/types";

const MovieDetailsPage: React.FC<{ id: number | string }> = ({ id }) => {
  return (
    <>
      <MovieDetails id={id} />
    </>
  );
};

export default MovieDetailsPage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const movieId = ctx.params?.movieId ?? "";

  return {
    props: {
      id: +movieId,
    },
  };
};

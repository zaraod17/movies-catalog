import MovieDetails from "@/components/MovieDetails/MovieDetails";

import { GetServerSideProps } from "next/types";

import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@/contexts/AuthContext";

const MovieDetailsPage: React.FC<{ id: number | string }> = ({ id }) => {
  const router = useRouter();
  const { token, userInfo } = useContext(AuthContext);

  useEffect(() => {
    if (!(token && userInfo.email)) {
      router.replace("/");
    }
  }, [router, token, userInfo.email]);
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

import { useLoaderData } from "react-router-dom";
import { Card } from "../components/UI/Card";

export const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);

  return (
    <>
      <ul className="container grid gird-four--cols">
        {moviesData &&
        moviesData.search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
      </ul>
    </>
  );
};

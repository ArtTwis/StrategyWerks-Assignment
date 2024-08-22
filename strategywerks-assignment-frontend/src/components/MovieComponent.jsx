import React from "react";
import MovieCard from "./MovieCard";

const MovieComponent = ({ movieInfo }) => {
  return (
    <div className="wrapper">
      <div className="container">
        <h1>Movies List</h1>
        <div className="movies_container">
          {movieInfo.map((curVal, id) => {
            return <MovieCard key={id} myData={curVal} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieComponent;

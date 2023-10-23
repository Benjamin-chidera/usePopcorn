import React, { useState } from "react";

export const useMovies = (query, callback) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const KEY = "eea16ff";
  return (
    <div>
      useEffect( function (){" "}
      callback?.()
      {


        async function fetchMovies() {
          try {
            setIsLoading(true);
            setError("");
            const res = await fetch(
              `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
            );

            const data = await res.json();
            if (data.Response === "false") throw new Error("Movie not found");

            // this res.ok mean if there is an error or a network issue then the message will be passed.

            if (!res.ok) {
              throw new Error("something went wrong with fetching movies");
            }

            setMovies(data.Search);
          } catch (err) {
            // this setError mean if there is  a network issue then the message will be passed.
            setError("error, please reload or check your internet connection");
          } finally {
            setIsLoading(false);
          }
        }

        // if (!query.length) {
        //   setMovies([]);
        //   setError("");
        //   return;
        // }
        // fetchMovies();

        // return function () {
        //   controller.abort()
        // }
      }
      , [query] );
    </div>
  );

  return {
    movies,
    isLoading,
    error,
  };
};

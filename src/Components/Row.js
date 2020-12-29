import React, { useState, useEffect } from "react";
import axios from "../axios"; // axios here is an alias to `instance` exported in axios.js
import "../Stylesheets/Row.css";
import YouTube from "react-youtube";
import { requestYouTubeTrailerID } from "../requests";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow, media_type }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const mediaType = fetchUrl.includes("all")
    ? "all"
    : fetchUrl.includes("tv")
    ? "tv"
    : "movie";

  // A snippet of code which runs based on a specific conditions/variable
  useEffect(() => {
    // if [](i.e, empty), run once when the row loads, and don't run again.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData(); // have to call the function because it's an `async` fn.
  }, [fetchUrl]); // it will run when `fetchUrl` changes. && `fetchUrl` is included coz it's from outside the useEffect block.

  //console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      async function fetchData() {
        const request = await axios.get(
          requestYouTubeTrailerID(movie, mediaType)
        );

        setTrailerUrl(request.data.results[0]?.key);
        return request;
      }
      fetchData();
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      <div className="row__posters">
        {/* several row__poster(s) */}
        {movies.map((movie) => {
          return (
            <div className={`poster ${!isLargeRow && "row__posterSmall"}`}>
              <img
                onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
              <div
                className="row__posterTitle"
                onClick={() => handleClick(movie)}
              >
                {movie?.title || movie?.name || movie?.original_name}
              </div>
            </div>
          );
        })}
      </div>

      {/* container -> posters */}
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

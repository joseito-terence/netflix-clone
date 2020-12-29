import React from "react";
import "./App.css";
import Row from "./Components/Row";
import requests from "./requests";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />

      <Row
        title="NETFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow /* true by default */
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTvShows} />
      <Row title="Animated Movies" fetchUrl={requests.fetchAnimatedMovies} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      {/* <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} media_type="movie" /> */}
    </div>
  );
}

export default App;

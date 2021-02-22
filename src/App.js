import React from "react";
import "./App.css";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="image-container d-flex justify-content-start m-3">
      <MovieList />
      <div className="overlay d-flex align-items-center justify-content   "></div>
    </div>
  );
}

export default App;

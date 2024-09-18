"use client";

import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios({
      method: "get",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "e7d28c287114e973b0af30de3465cb38",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });
  };

  return (
    <div>
      <ul class="movie-list">
        {movies.map((movie) => (
          <li class="movie-card">
            <div class="movie-poster">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div class="movie-infos">
              <p className="movie-title">{movie.title}</p>
              <div className="hidden-content">
                <p class="description">{movie.overview}</p>
                <button className="btn-default">
                    Ver mais
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

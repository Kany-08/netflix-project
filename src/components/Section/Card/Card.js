import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} >
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h2>{movie.title}</h2>
      </article>
    </Link>
  );
}

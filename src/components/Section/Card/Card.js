import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ movie, content }) {
  return (
    <Link to={`/${content}/${movie.id}`} >
      <article
        className="Card"
        style={{ backgroundImage: `url(${movie.image})` }}
      >
        <h2>{movie.title}</h2>
      </article>
    </Link>
  );
}

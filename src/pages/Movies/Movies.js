import React from "react";
import "./Movies.css";
import Section from "../../components/Section/Section";
import { actionMovies, newMovies } from "../../api/movies";

export default function Movies() {
  return (
    <div>
      <Section title="Action movies" data={actionMovies} content='movie' />
      <Section title="New Movies" data={newMovies} content='movie' />
    </div>
  );
}

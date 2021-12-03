import React, { useEffect, useState } from "react";
import "./TvShowEpisode.css";
import { useParams } from "react-router";
import tvShows from "../../api/tv-shows";
import { Modal } from "react-bootstrap";

export default function TvShowEpisode() {
  const { tvShowId, seasonId, episodeId } = useParams();

  const [tvShow, setTvShow] = useState({});
  const [season, setSeason] = useState({});
  const [episode, setEpisode] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getTvShow = tvShows.find((el) => el.id === tvShowId);
    setTvShow(getTvShow);

    const getSeason = getTvShow.seasons.find((el) => el.id === seasonId);
    setSeason(getSeason);
    console.log(getSeason);
    const getEpisode = getSeason.episodes.find((el) => el.id === episodeId);
    setEpisode(getEpisode);
  }, [tvShowId, seasonId, episodeId]);
  console.log(tvShow);
  return (
    <div
      className="TvShowEpisode"
      style={{ backgroundImage: `url(${tvShow.image})` }}
    >
      <h1> {tvShow.title} </h1>
      <h2>
        {" "}
        {season.title} - {episode.title}{" "}
      </h2>

      <div onClick={() => setIsOpen(!isOpen)} className="Play">
        Play
      </div>

      <Modal
        
        onHide={() => setIsOpen(false)}
        show={isOpen}
        size="lg"
        centered
      >
        <iframe
          height="315"
          src={episode.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      </Modal>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import "./TvShowEpisode.css";
import { useParams } from "react-router";
// import tvShows from "../../api/tv-shows";
import { Modal } from "react-bootstrap";

const backendURL = process.env.REACT_APP_BACKEND_URL;

export default function TvShowEpisode() {
  const { tvShowId, seasonId, episodeId } = useParams();
  const [tvShow, setTvShow] = useState({});
  const [season, setSeason] = useState({});
  const [episode, setEpisode] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  console.log('====================================');
  console.log(episode);
  console.log('====================================');

  

  useEffect(() => {
    const getEpisodeById = async () => {

      const res = await fetch(backendURL + "/tv-show-episode/" + tvShowId + "/" + seasonId + "/" + episodeId);
      const data = await res.json();
      setEpisode(data)
    };
  
    const getSeasonById = async () => {
      const res = await fetch(backendURL + "/tv-show-season/" + tvShowId + "/" + seasonId);
      const data = await res.json();
      setSeason(data)
    };
  
    const getTvShowById = async () => {
      const res = await fetch(backendURL + "/tv-show/" + tvShowId);
      const data = await res.json();
      setTvShow(data)
    };
    getEpisodeById()
    getSeasonById()
    getTvShowById()

  }, [tvShowId, seasonId, episodeId]);
  console.log(season, episode);

  return (
    <div
      className="TvShowEpisode"
      style={{ backgroundImage: `url(${tvShow.image})` }}
    >
      <h1> {tvShow.title} </h1>
      <h2>
        {" "}
        {season?.title} - {episode?.title}{" "}
      </h2>

      <div onClick={() => setIsOpen(!isOpen)} className="Play">
        Play
      </div>

      <Modal onHide={() => setIsOpen(false)} show={isOpen} size="lg" centered>
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

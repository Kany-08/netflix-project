import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
// import moviesData from "../../api/movies";
import "./Movie.css";
import { Modal } from "react-bootstrap";

const backendURL = process.env.REACT_APP_BACKEND_URL

export default function Movie() {
  const { pageId } = useParams();
  const [movieObject, setMovieObject] = useState(null);
  const [isOpen, setIsOpen]= useState(false)

  

  useEffect(() => {
    const getMovieById = async()=>{
      const res = await fetch(backendURL + '/movie/' + pageId)
      const data = await res.json()
      setMovieObject(data)
    }
    getMovieById()
    
  }, [pageId]);

  return movieObject ? (
    <div
      className="Movie"
      style={{ backgroundImage: `url(${movieObject.image})` }}
    >
      <h2> {movieObject.title} </h2>
      <p> {movieObject.description} </p>
      <span onClick={()=>setIsOpen(true)} className="Play">PLAY</span>
      <Modal onHide={()=>setIsOpen(false)} show={isOpen} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <iframe  height="315" src={movieObject.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullscreen></iframe>
      </Modal>
    </div>
  ) : (
    <div>Loading...</div>
  );
}

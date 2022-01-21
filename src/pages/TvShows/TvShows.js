import React, {useEffect, useState} from 'react';
import './TvShows.css';
import Section from '../../components/Section/Section';
// import { newTvShows, actionTvShows } from '../../api/tv-shows';

const backendURL = process.env.REACT_APP_BACKEND_URL

export default function TvShows() {

    const [newTvShows, setNewTvShows ] =useState()
  const [actionTvShows, setActionTvShows ] =useState()

  const getActionTvShows  = async () =>{
    const res = await fetch(backendURL + '/action-tv-shows')
    const data = await res.json()
    setActionTvShows(data)
}

const getNewTvShows  = async () =>{
    const res = await fetch(backendURL + '/new-tv-shows')
    const data = await res.json()
    setNewTvShows(data)
}

useEffect(()=>{
    
    getActionTvShows()
    getNewTvShows()
},[])

    return (
        <div>
            <Section title='New Tv-shows' data={newTvShows} content='tv-show' />
            <Section title='Action Tv-shows' data={actionTvShows} content='tv-show' /> 
           
        </div>
    )
}

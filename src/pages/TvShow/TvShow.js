import React, { useEffect, useState} from 'react';
import './TvShow.css';
import { useParams, Link } from 'react-router-dom';
import tvShows from '../../api/tv-shows'

export default function TvShow() {
    const { tvShowId } = useParams();
    const [tvShowObject, setTvShowObject] = useState();
    const [tvShowSeason, setTvShowSeason] = useState({});

    useEffect(()=> {
        const getTvShow = tvShows.find((el) => el.id === tvShowId);
        setTvShowObject(getTvShow);
        setTvShowSeason(getTvShow.seasons[1])
    }, [tvShowId]);



    return (
        <div>
            <h1>{tvShowObject?.title}</h1>

            <div className='TvShow'>
                <div className='Seasons'>{tvShowObject?.seasons?.map((el)=><div className='Season' onClick={()=> setTvShowSeason(el)} >{el.title}</div>)}</div>
                <div className='Episodes'>
                    {
                        tvShowSeason?.episodes?.map((el)=>(
                            
                           <div className='Episode' key={el.id} >
                               <Link  to={`/tv-show-episode/${tvShowObject.id}/${tvShowSeason.id}/${el.id}`}><img src={el.image} alt='' width='100' className='EpisodeImage' />
                               </Link>
                               
                              <span>
                                {el.title}
                            </span> 
                           </div>
                            
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

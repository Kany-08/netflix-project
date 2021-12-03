import React from 'react';
import './TvShows.css';
import Section from '../../components/Section/Section';
import { newTvShows, actionTvShows } from '../../api/tv-shows';

export default function TvShows() {
    return (
        <div>
            <Section title='New Tv-shows' data={newTvShows} content='tv-show' />
            <Section title='Action Tv-shows' data={actionTvShows} content='tv-show' /> 
           
        </div>
    )
}

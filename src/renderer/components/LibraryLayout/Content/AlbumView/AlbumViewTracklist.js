import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import TracklistHeader from '../Tracklist/TracklistHeader';
import AlbumViewTracklistWrap from './AlbumViewTracklistWrap';

const AlbumViewTracklist = () => {
  return (
    <AlbumViewTracklistWrap>
      <Tracklist artistVisible>
        <TracklistHeader>
          <div className="row right last-played">Last played</div>
          <div className="row right plays">Plays</div>
          <div className="row right bitrate">Bitrate</div>
          <div className="row right format">Format</div>
          <div className="row right genre">Genre</div>
          <div className="row left position">#</div>
          <div className="row info">
            <div className="title-and-time">
              <div className="time">Time</div>
              <div className="title">Title</div>
            </div>
            <div className="artist">Artist</div>
          </div>
        </TracklistHeader>
      </Tracklist>
    </AlbumViewTracklistWrap>
  );
};

export default AlbumViewTracklist;

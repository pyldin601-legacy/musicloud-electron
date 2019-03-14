import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import TracklistHeader from '../Tracklist/TracklistHeader';
import AlbumViewTracklistWrap from './AlbumViewTracklistWrap';
import TracklistItem from '../Tracklist/TracklistItem';

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
        <TracklistItem>
          <div className="row right last-played">14.03.2019 23:44</div>
          <div className="row right plays">11</div>
          <div className="row right bitrate">256 kbps</div>
          <div className="row right format">mp3</div>
          <div className="row right genre">Disco</div>
          <div className="row left position">1/10</div>
          <div className="row info">
            <div className="title-and-time">
              <div className="time">3:33</div>
              <div className="title">Tubular Bells</div>
            </div>
            <div className="artist">Mike Oldfield</div>
          </div>
        </TracklistItem>
        <TracklistItem className="selected">
          <div className="row right last-played">14.03.2019 23:46</div>
          <div className="row right plays">5</div>
          <div className="row right bitrate">256 kbps</div>
          <div className="row right format">mp3</div>
          <div className="row right genre">Disco</div>
          <div className="row left position">2/10</div>
          <div className="row info">
            <div className="title-and-time">
              <div className="time">3:44</div>
              <div className="title">Tubular Bells II</div>
            </div>
            <div className="artist">Mike Oldfield</div>
          </div>
        </TracklistItem>
      </Tracklist>
    </AlbumViewTracklistWrap>
  );
};

export default AlbumViewTracklist;

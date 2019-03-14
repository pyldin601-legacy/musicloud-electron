import React from 'react';
import AlbumViewWrap from './AlbumViewWrap';
import AlbumViewHeader from './AlbumViewHeader';
import AlbumViewTracklist from './AlbumViewTracklist';

const AlbumView = () => {
  return (
    <AlbumViewWrap>
      <AlbumViewHeader artworkUrl="https://via.placeholder.com/200" />
      <AlbumViewTracklist />
    </AlbumViewWrap>
  );
};

export default AlbumView;

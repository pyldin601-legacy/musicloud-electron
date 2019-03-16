import React from 'react';
import AlbumViewWrap from './AlbumViewWrap';
import AlbumViewHeader from './AlbumViewHeader';
import AlbumViewTracklist from './AlbumViewTracklist';
import { apiEndpointContext } from '../../../contexts/apiEndpointContext';

const AlbumView = () => {
  const apiEndpoint = React.useContext(apiEndpointContext);

  return (
    <AlbumViewWrap>
      <audio autoPlay>
        <source src={`${apiEndpoint}/listen`} />
      </audio>
      <AlbumViewHeader artworkUrl="https://via.placeholder.com/200" />
      <AlbumViewTracklist />
    </AlbumViewWrap>
  );
};

export default AlbumView;

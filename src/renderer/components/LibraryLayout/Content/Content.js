import React from 'react';
import { Route } from 'react-router';
import ContentWrap from './ContentWrap';
import AlbumView from '../../../albumView/components/AlbumView/AlbumView';

const Content = () => {
  return (
    <ContentWrap>
      <Route path="/artists" render={() => 'Artists'} />
      <Route path="/albums" render={() => <AlbumView />} />
      <Route path="/compilations" render={() => 'Compilations'} />
      <Route path="/genres" render={() => 'Genres'} />
      <Route path="/tracks" render={() => 'Tracks'} />
      <Route path="/playlists/:id" render={props => `Playlist ${props.match.params.id}`} />
    </ContentWrap>
  );
};

export default Content;

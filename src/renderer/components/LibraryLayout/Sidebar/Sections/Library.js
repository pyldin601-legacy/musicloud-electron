import React from 'react';
import SidebarTitle from '../SidebarTitle';
import SidebarSection from '../SidebarSection';
import SidebarList from '../SidebarList';
import SidebarLinkItem from '../SidebarLinkItem';

const Library = () => {
  return (
    <SidebarSection>
      <SidebarTitle>LIBRARY</SidebarTitle>
      <SidebarList>
        <SidebarLinkItem to="/artists" pathToMatch="/artists/:artist?">
          Artists
        </SidebarLinkItem>
        <SidebarLinkItem to="/albums" pathToMatch="/albums/:album?">
          Albums
        </SidebarLinkItem>
        <SidebarLinkItem to="/compilations" pathToMatch="/compilations/:compilation?">
          Compilations
        </SidebarLinkItem>
        <SidebarLinkItem to="/genres" pathToMatch="/genres/:genre?">
          Genres
        </SidebarLinkItem>
        <SidebarLinkItem to="/tracks" pathToMatch="/tracks">
          Tracks
        </SidebarLinkItem>
      </SidebarList>
    </SidebarSection>
  );
};

export default Library;

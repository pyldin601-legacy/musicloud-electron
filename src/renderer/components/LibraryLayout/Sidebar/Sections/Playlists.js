import React from 'react';
import SidebarTitle from '../SidebarTitle';
import SidebarSection from '../SidebarSection';
import SidebarList from '../SidebarList';
import SidebarLinkItem from '../SidebarLinkItem';

const Playlists = () => {
  return (
    <SidebarSection>
      <SidebarTitle>PLAYLISTS</SidebarTitle>
      <SidebarList>
        <SidebarLinkItem to="/playlists/1" pathToMatch="/playlists/1">
          New Playlist 1
        </SidebarLinkItem>
        <SidebarLinkItem to="/playlists/2" pathToMatch="/playlists/2">
          New Playlist 2
        </SidebarLinkItem>
      </SidebarList>
    </SidebarSection>
  );
};

export default Playlists;

import React from 'react';
import SidebarTitle from '../SidebarTitle';
import SidebarSection from '../SidebarSection';
import SidebarList from '../SidebarList';
import SidebarListItem from '../SidebarListItem';

const Playlists = () => {
  return (
    <SidebarSection>
      <SidebarTitle>PLAYLISTS</SidebarTitle>
      <SidebarList>
        <SidebarListItem>New Playlist 1</SidebarListItem>
        <SidebarListItem>New Playlist 2</SidebarListItem>
      </SidebarList>
    </SidebarSection>
  );
};

export default Playlists;

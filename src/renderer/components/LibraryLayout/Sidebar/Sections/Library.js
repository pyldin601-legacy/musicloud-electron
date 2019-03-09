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
        <SidebarLinkItem to="/artists" matchingPath="/artists/:artist?">
          Artists
        </SidebarLinkItem>
        <SidebarLinkItem to="/albums" matchingPath="/albums/:album?">
          Albums
        </SidebarLinkItem>
        <SidebarLinkItem to="/compilations" matchingPath="/compilations/:compilation?">
          Compilations
        </SidebarLinkItem>
        <SidebarLinkItem to="/genres" matchingPath="/genres/:genre?">
          Genres
        </SidebarLinkItem>
        <SidebarLinkItem to="/tracks" matchingPath="/tracks">
          Tracks
        </SidebarLinkItem>
      </SidebarList>
    </SidebarSection>
  );
};

export default Library;

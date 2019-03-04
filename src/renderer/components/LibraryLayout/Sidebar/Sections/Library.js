import React from 'react';
import SidebarTitle from '../SidebarTitle';
import SidebarSection from '../SidebarSection';
import SidebarList from '../SidebarList';
import SidebarListItem from '../SidebarListItem';

const Library = () => {
  return (
    <SidebarSection>
      <SidebarTitle>LIBRARY</SidebarTitle>
      <SidebarList>
        <SidebarListItem>Artists</SidebarListItem>
        <SidebarListItem>Albums</SidebarListItem>
        <SidebarListItem>Compilations</SidebarListItem>
        <SidebarListItem>Genres</SidebarListItem>
        <SidebarListItem>Tracks</SidebarListItem>
      </SidebarList>
    </SidebarSection>
  );
};

export default Library;

import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import PlayerControls from './PlayerControls/PlayerControls';
import LibrarySections from './LibrarySections/LibrarySections';
import LibraryPlaylists from './LibraryPlaylists/LibraryPlaylists';
import LibraryContent from './LibraryContent/LibraryContent';

const LayoutWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  & ${Sidebar} {
    width: 260px;
  }

  & ${LibraryContent} {
    padding-bottom: 48px;
  }

  & ${PlayerControls} {
    position: fixed;
    border-top: 1px solid #313d49;
    bottom: 0;
    z-index: 10;
  }
`;

const LibraryLayout = () => {
  return (
    <LayoutWrap>
      <Sidebar>
        <LibrarySections />
        <LibraryPlaylists />
      </Sidebar>
      <LibraryContent />
      <PlayerControls />
    </LayoutWrap>
  );
};

export default LibraryLayout;
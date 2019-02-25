import React from 'react';
import styled from 'styled-components';

const Sidebar = styled.div`
  background-color: #f1f2f4;
  border-right: 1px solid #ced1d6;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;
const LibraryContent = styled.div`
  padding-bottom: 48px;
`;
const LibrarySections = styled.div``;
const LibraryPlaylists = styled.div``;
const PlayerControls = styled.div`
  position: fixed;
  width: 100%;
  height: 48px;
  display: table;
  table-layout: fixed;
  border-top: 1px solid #313d49;
  bottom: 0;
  z-index: 10;
  color: #dddddd;
  background-color: #223344;
`;

const LayoutWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;

  & ${Sidebar} {
    width: 260px;
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

import React from 'react';
import { ipcRenderer } from 'electron';
import AlbumViewWrap from './AlbumViewWrap';
import AlbumViewHeader from './AlbumViewHeader';
import AlbumViewTracklist from './AlbumViewTracklist';

const AlbumView = () => {
  const [files, setFiles] = React.useState([]);

  function handleFilesReply(_, _files) {
    setFiles(_files);
  }

  React.useEffect(() => {
    ipcRenderer.on('open-audio-files:reply', handleFilesReply);
    ipcRenderer.send('open-audio-files:request');
    return () => ipcRenderer.removeListener('open-audio-files:reply', handleFilesReply);
  }, []);

  console.log(files);

  return (
    <AlbumViewWrap>
      <AlbumViewHeader artworkUrl="https://via.placeholder.com/200" />
      <AlbumViewTracklist />
    </AlbumViewWrap>
  );
};

export default AlbumView;

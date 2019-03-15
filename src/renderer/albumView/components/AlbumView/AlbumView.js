import React from 'react';
import AlbumViewWrap from './AlbumViewWrap';
import AlbumViewHeader from './AlbumViewHeader';
import AlbumViewTracklist from './AlbumViewTracklist';
import { createAPICall } from '../../../../helpers/ipcHelpers';

const openAudioFiles = createAPICall('open-audio-files');

const AlbumView = () => {
  const [files, setFiles] = React.useState([]);

  React.useEffect(() => {
    openAudioFiles().then(_files => {
      setFiles(_files);
    });
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

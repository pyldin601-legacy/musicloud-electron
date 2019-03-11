import React from 'react';
import AlbumViewHeaderWrap from './AlbumViewHeaderWrap';

const AlbumViewHeader = () => {
  return (
    <AlbumViewHeaderWrap>
      <img className="blurred-artwork" alt="cover" src="https://placeimg.com/200/200/animals" />
      <div className="left-section">
        <div className="backdrop">
          <img className="artwork" alt="cover" src="https://placeimg.com/200/200/animals" />
        </div>
      </div>
      <div className="info-section">
        <div className="album-artist">Mike Oldfield</div>
        <div className="album-title">Songs Of Distant Earth</div>
        <div className="album-info">
          <table>
            <thead>
              <tr>
                <th>Release Year</th>
                <th>Tracks/Discs</th>
                <th>Duration</th>
                <th>Genre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2009</td>
                <td>21/1</td>
                <td>56:41</td>
                <td>House/Breaks/Downtempo/Synth-Pop</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </AlbumViewHeaderWrap>
  );
};

export default AlbumViewHeader;

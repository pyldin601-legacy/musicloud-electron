import styled from 'styled-components';

const AlbumViewHeaderWrap = styled.div`
  background-color: #1a232f;
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    display: table;
    clear: both;
  }

  & .blurred-artwork {
    margin-top: -50%;
    position: absolute;
    width: 102%;
    top: -1%;
    left: -1%;
    right: -1%;
    z-index: 0;
    opacity: 0.9;
    filter: blur(50px);
  }

  & .left-section {
    position: relative;
    z-index: 1;
    float: left;

    & .backdrop {
      background: #fcfcfc url(/images/no-artwork.jpg) center center no-repeat;
      background-size: cover;
      width: 200px;
      height: 200px;
      position: relative;

      & .artwork {
        width: 100%;
        height: 100%;
        vertical-align: middle;
      }
    }
  }

  & .info-section {
    position: relative;
    overflow: hidden;
    z-index: 1;
    color: #ffffff;
    line-height: 1.5em;
    text-shadow: 1px 1px 4px #000000;
    padding-top: 2px;
    margin-top: 12px;

    & .album-artist {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 12px;
      font-size: 12pt;
    }

    & .album-title {
      padding-left: 16px;
      padding-right: 16px;
      font-size: 20pt;
      padding-bottom: 12px;
      font-weight: 600;
    }

    & .album-incl {
      font-size: 12pt;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 12px;
    }

    & .album-info {
      padding-top: 16px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 12pt;

      & table {
        text-transform: uppercase;
        max-width: 100%;
        table-layout: fixed;
        text-align: left;

        & th {
          font-size: 10pt;
        }

        & td {
          font-size: 14pt;
        }

        & td,
        & th {
          padding-right: 20px;
          padding-top: 2px;
          padding-bottom: 2px;
          line-height: 100%;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
`;

export default AlbumViewHeaderWrap;

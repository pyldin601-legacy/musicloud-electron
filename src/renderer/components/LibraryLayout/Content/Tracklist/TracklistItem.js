import styled from 'styled-components';

const TracklistItem = styled.div`
  margin-right: -8px;
  margin-left: -8px;
  padding: 6px 8px;

  & .row {
    padding: 0 4px;

    &.left {
      float: left;
    }
    &.right {
      float: right;
    }

    &.last-played {
      width: 150px;
      text-align: right;
    }
    &.plays {
      width: 32px;
      text-align: center;
    }
    &.bitrate {
      width: 75px;
      text-align: center;
    }
    &.format {
      width: 75px;
      text-align: center;
    }
    &.genre {
      width: 96px;
    }
    &.position {
      width: 36px;
      text-align: right;
    }
    &.info {
      overflow: hidden;

      & .title-and-time {
        width: 60%; /* Change to 100% when artist column is hidden */
        float: left;

        & .time {
          width: 70px;
          float: right;
          text-align: center;
          padding-left: 4px;
          padding-right: 4px;
        }
      }

      & .artist {
        width: 40%;
        float: left;
      }
    }
  }

  &.selected {
    border-radius: 4px;
    background-color: #334455;
    color: #ffffff;
  }
`;

export default TracklistItem;

import styled from 'styled-components';
import TracklistItem from './TracklistItem';

const Tracklist = styled.div`
  margin-bottom: 24px;

  & ${TracklistItem} {
    & .row.info .title-and-time {
      width: ${({ artistVisible }) => (artistVisible ? '60%' : '100%')};
    }
    & .row.info .artist {
      display: ${({ artistVisible }) => (artistVisible ? 'block' : 'none')};
    }
  }
`;

Tracklist.defaultProps = {
  artistVisible: false,
};

export default Tracklist;

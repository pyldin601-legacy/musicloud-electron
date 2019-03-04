import styled from 'styled-components';

const SidebarListItem = styled.li`
  font-weight: 600;

  padding-left: 24px;
  padding-right: 24px;
  padding-top: 12px;
  padding-bottom: 12px;

  &:hover,
  &.active {
    background-color: #dfe2e9;
    color: #111111;
  }
`;

export default SidebarListItem;

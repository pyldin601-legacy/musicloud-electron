import React from 'react';
import cn from 'classnames';
import { withRouter, matchPath } from 'react-router';
import SidebarListItem from './SidebarListItem';

const SidebarLinkItem = ({ to, location, pathToMatch, history, children }) => {
  const handleClick = () => history.push(to);

  const active = matchPath(location.pathname, pathToMatch);

  return (
    <SidebarListItem className={cn({ active })} onClick={handleClick}>
      {children}
    </SidebarListItem>
  );
};

export default withRouter(SidebarLinkItem);

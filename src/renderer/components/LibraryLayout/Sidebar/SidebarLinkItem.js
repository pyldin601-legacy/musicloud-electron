import React from 'react';
import cn from 'classnames';
import { withRouter, matchPath } from 'react-router';
import SidebarListItem from './SidebarListItem';
import Pointer from '../../styled/Pointer';

const SidebarLinkItem = ({ to, location, matchingPath, history, children }) => {
  const handleClick = () => history.push(to);

  const active = matchPath(location.pathname, matchingPath);

  return (
    <Pointer>
      <SidebarListItem className={cn({ active })} onClick={handleClick}>
        {children}
      </SidebarListItem>
    </Pointer>
  );
};

export default withRouter(SidebarLinkItem);

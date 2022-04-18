import React from 'react';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotiBadge = (props) => {
  const [is_read, setIsRead] = React.useState(true);
  const notiCheck = () => {
    props._onClick();
  };
  return (
    <>
      <Badge
        color='secondary'
        variant='dot'
        invisible={is_read}
        onClick={notiCheck}
      >
        <NotificationsIcon />
      </Badge>
    </>
  );
};

NotiBadge.defaultProps = {
  _onClick: () => {},
};

export default NotiBadge;

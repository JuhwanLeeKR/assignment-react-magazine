import React from 'react';
import { Badge } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { realtime } from '../shared/firebase';
import { useSelector } from 'react-redux';

const NotiBadge = (props) => {
  const [is_read, setIsRead] = React.useState(true);
  const user_id = useSelector((state) => state.user.user.uid);
  const notiCheck = () => {
    const notiDB = realtime.ref(`noti/${user_id}`);
    notiDB.update({ read: true });
    props._onClick();
  };

  React.useEffect(() => {
    const notiDB = realtime.ref(`noti/${user_id}`);

    notiDB.on('value', (snapshot) => {
      // snapshot.val()가 없을 경우 예외처리
      if (snapshot.val()) {
        setIsRead(snapshot.val().read);
      }
    });

    return () => notiDB.off();
  }, [user_id]);

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

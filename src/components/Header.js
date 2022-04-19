import React from 'react';
import { Grid, Text, Button } from '../elements';
import { getCookie, deleteCookie } from '../shared/Cookie';
import { ReactComponent as Logo } from '../assets/Logo.svg';

import { useSelector, useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

import { history } from '../redux/configureStore';
import { apiKey } from '../shared/firebase';
import NotiBadge from './NotiBadge';

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const user_info = useSelector((state) => state.user.user);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`;

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  console.log(is_session);

  if (is_login && is_session) {
    return (
      <>
        <Grid is_flex padding='4px 16px'>
          <Grid>
            <Logo
              onClick={() => {
                history.push('/');
              }}
              style={{ margin: '10px 0 0 0', cursor: 'pointer' }}
            />
          </Grid>

          <Grid is_flex width='false'>
            <NotiBadge
              _onClick={() => {
                history.push('/noti');
              }}
            />
            <Button
              width='80px'
              padding='10px 5px'
              margin='0px 0px 0px 10px'
              borderRadius='10px'
              text='로그아웃'
              _onClick={() => {
                dispatch(userActions.logoutFB());
              }}
            ></Button>
          </Grid>
        </Grid>
        <div
          style={{
            textAlign: 'right',
            margin: '0 10px 8px 0',
            fontSize: '14px',
          }}
        >
          안녕하세요 {user_info.user_name}님👍
        </div>
      </>
    );
  }

  return (
    <React.Fragment>
      <Grid is_flex padding='4px 16px'>
        <Grid>
          <Logo
            onClick={() => {
              history.push('/');
            }}
            style={{ margin: '10px 0 0 0', cursor: 'pointer' }}
          />
        </Grid>

        <Grid is_flex width='200px'>
          <Button
            width='80px'
            padding='10px 2px'
            margin='0px 0px 0px 10px'
            borderRadius='10px'
            text='로그인'
            _onClick={() => {
              history.push('/login');
            }}
          ></Button>
          <Button
            width='80px'
            padding='10px 5px'
            margin='0px 0px 0px 4px'
            borderRadius='10px'
            text='회원가입'
            _onClick={() => {
              history.push('/signup');
            }}
          ></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

Header.defaultProps = {};

export default Header;

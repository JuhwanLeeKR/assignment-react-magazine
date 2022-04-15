import React from 'react';
import { Button, Grid, Input, Text } from '../elements';
import { setCookie } from '../shared/Cookie';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Login = (props) => {
  const dispatch = useDispatch();

  const login = () => {
    dispatch(userActions.loginAction({ user_name: 'Chinchilla' }));
  };

  return (
    <React.Fragment>
      <Grid padding='16px'>
        <Text type='heading'>로그인 페이지</Text>
      </Grid>
      <Grid padding='16px'>
        <Input
          // value={id}
          // onChange={changeId}
          placeholder='아이디를 입력하세요.'
        />
        <Input
          // value={pwd}
          // onChange={changePwd}
          type='password'
          placeholder='비밀번호를 입력하세요.'
        />
      </Grid>

      <Button
        text='로그인하기'
        _onClick={() => {
          console.log('로그인 했어!');
          login();
        }}
      >
        로그인
      </Button>
    </React.Fragment>
  );
};

export default Login;

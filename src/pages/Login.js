import React from 'react';
import { Button, Grid, Input, Text } from '../elements';
import { setCookie } from '../shared/Cookie';

import { useDispatch } from 'react-redux';
import { actionCreators as userActions } from '../redux/modules/user';

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState('');
  const [pwd, setPwd] = React.useState('');

  const login = () => {
    if (id === '' || pwd === '') {
      window.alert('아이디 혹은 비밀번호가 공란입니다! 입력해주세요!');
      return;
    }
    dispatch(userActions.loginFB(id, pwd));
  };

  return (
    <React.Fragment>
      <Grid padding='16px'>
        <Text type='heading'>로그인 페이지</Text>
      </Grid>
      <Grid padding='16px'>
        <Input
          // value={id}
          label='아이디'
          _onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder='아이디를 입력하세요.'
        />
        <Input
          // value={pwd}
          label='패스워드'
          _onChange={(e) => {
            setPwd(e.target.value);
          }}
          type='password'
          placeholder='비밀번호를 입력하세요.'
        />
      </Grid>
      <Grid padding='16px'>
        <Button
          text='로그인하기'
          _onClick={() => {
            console.log('로그인 했어!');
            login();
          }}
        >
          로그인
        </Button>
      </Grid>
    </React.Fragment>
  );
};

export default Login;

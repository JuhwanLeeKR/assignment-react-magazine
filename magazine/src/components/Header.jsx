import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/Logo.svg';
import CreateIcon from '@mui/icons-material/Create';
import { Grid, Button } from '../elements/';

import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const toHome = () => {
    navigate('./');
  };

  const toSignin = () => {
    navigate('./signin');
  };

  const toSignup = () => {
    navigate('./signup');
  };

  const goWrite = () => {
    navigate('./write');
  };

  return (
    <>
      <Grid is_flex padding='4px 16px' bg='rgba(255,255,255,0.4)'>
        <Grid>
          <Logo
            onClick={toHome}
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
            _onClick={toSignin}
          ></Button>
          <Button
            width='80px'
            padding='10px 5px'
            margin='0px 0px 0px 4px'
            borderRadius='10px'
            text='회원가입'
            _onClick={toSignup}
          ></Button>
        </Grid>
      </Grid>
      <Button is_float _onClick={goWrite}>
        <CreateIcon />
      </Button>
    </>
  );
};

// const HeaderWrap = styled.div`
//   position: fixed;
// `;

export default Header;

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Text } from '../elements';
import { signin } from '../redux/modules/user';

import { getTokenFromCookie } from '../shared/cookie';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = getTokenFromCookie('token');
  const isLogin = useSelector((state) => state);

  if (token) {
    window.alert('이미 로그인이 되어있습니다.');
    console.log(isLogin);
    // navigate('/', { replace: true });
  }

  const submitHandler = ({ email, password }) => {
    dispatch(signin({ email, password })).then(() => {
      navigate('/');
    });
  };
  return (
    <FormWrapper>
      <Text size='30px' align='center' margin='0px 0px 20px 0px'>
        로그인 페이지
      </Text>
      <FormLayout onSubmit={handleSubmit(submitHandler)}>
        <InputLayout
          {...register('email', { required: '이메일을 입력해주세요' })}
          placeholder='Email'
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <InputLayout
          {...register('password', { required: '비밀번호를 입력해주세요' })}
          placeholder='Password'
          type='password'
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>

        <Button>로그인 하기</Button>
      </FormLayout>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`;
const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const InputLayout = styled.input`
  margin-bottom: 10px;
  height: 40px;
  font-size: 1.2rem;
  padding: 10px;
  &:focus {
    outline: #07f auto 1px;
    outline-color: #07f;
    outline-style: auto;
    outline-width: 1px;
  }
`;
const ErrorMessage = styled.span`
  margin-bottom: 10px;
  color: #ff3300;
`;

export default Signin;

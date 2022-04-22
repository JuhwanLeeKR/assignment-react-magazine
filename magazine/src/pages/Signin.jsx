import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Text } from '../elements';

const Signin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <FormWrapper>
      <Text size='30px' align='center' margin='0px 0px 20px 0px'>
        로그인 페이지
      </Text>
      <FormLayout onSubmit={handleSubmit(onSubmit)}>
        <InputLayout
          {...register('email', { required: '이메일을 입력해주세요' })}
          placeholder='Email'
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <InputLayout
          {...register('password', { required: '비밀번호를 입력해주세요' })}
          placeholder='Password'
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

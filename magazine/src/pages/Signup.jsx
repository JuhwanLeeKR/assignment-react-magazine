import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Button, Text } from '../elements';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  // 유효성 검사 함수
  const onValid = (data) => {
    if (data.password !== data.passwordConfirm) {
      setError(
        'passwordConfirm',
        { message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' },
        { shouldFocus: true }
      );
    } else if (data.password.includes(data.nickname)) {
      setError(
        'password',
        { message: '비밀번호에 닉네임이 포함되어 있습니다.' },
        { shouldFocus: true }
      );
    }
    console.log(data);
  };
  return (
    <FormWrapper>
      <Text size='30px' align='center' margin='0px 0px 20px 0px'>
        안녕하세요🖐️
      </Text>
      <FormLayout onSubmit={handleSubmit(onValid)}>
        <InputLayout
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.0-9a-zA-Z])*@[0-9a-zA-Z]([-_.0-9a-zA-z])*.([a-zA-Z])*/,
              message: '올바른 형식의 이메일을 입력해주세요.',
            },
          })}
          placeholder='Email'
        />
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <InputLayout
          {...register('nickname', {
            required: '닉네임을 입력해주세요.',
            minLength: {
              value: 3,
              message: '닉네임은 3자 이상이어야 합니다.',
            },
          })}
          placeholder='Nickname'
        />
        <ErrorMessage>{errors?.nickname?.message}</ErrorMessage>
        <InputLayout
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 4,
              message: '비밀번호는 4자 이상이어야 합니다.',
            },
          })}
          placeholder='Password'
          type='password'
        />
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <InputLayout
          {...register('passwordConfirm', {
            required: '비밀번호를 다시 한번 입력해주세요.',
            minLength: {
              value: 4,
              message: '비밀번호는 4자 이상이어야 합니다.',
            },
          })}
          placeholder='Password Confirm'
          type='password'
        />
        <ErrorMessage>{errors?.passwordConfirm?.message}</ErrorMessage>
        {/* <InputLayout type='submit' /> */}
        <Button>회원가입 하기</Button>
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

export default Signup;

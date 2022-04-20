import { useForm } from 'react-hook-form';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  //console.log(formState.errors);

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
    <>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        {/* register your input into the hook by invoking the "register" function */}
        <input
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
        <span>{errors?.email?.message}</span>
        <input
          {...register('nickname', {
            required: '닉네임을 입력해주세요.',
            minLength: {
              value: 3,
              message: '닉네임은 3자 이상이어야 합니다.',
            },
          })}
          placeholder='Nickname'
        />
        <span>{errors?.nickname?.message}</span>
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: {
              value: 4,
              message: '비밀번호는 4자 이상이어야 합니다.',
            },
          })}
          placeholder='Password'
        />
        <span>{errors?.password?.message}</span>
        <input
          {...register('passwordConfirm', {
            required: '비밀번호를 다시 한번 입력해주세요.',
            minLength: {
              value: 4,
              message: '비밀번호는 4자 이상이어야 합니다.',
            },
          })}
          placeholder='Password Confirm'
        />
        <span>{errors?.passwordConfirm?.message}</span>

        {/* {errors.exampleRequired && <span>This field is required</span>} */}

        {/* <input type='submit' /> */}
        <button>Add</button>
      </form>
    </>
  );
};

export default Signup;

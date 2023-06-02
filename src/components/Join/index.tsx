import * as S from './style';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Join() {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    validateInputs();
  };

  const validateInputs = () => {
    if (inputs.email.includes('@') && inputs.password.length >= 8) {
      setDisabled(false);
    }
  };

  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <S.Form>
      이메일:{' '}
      <S.EmailInput
        data-testid='email-input'
        placeholder='이메일을 입력하세요'
        name='email'
        onChange={onChange}
        value={email}
        type='email'
      />
      비밀번호:{' '}
      <S.PasswordInput
        data-testid='password-input'
        placeholder='비밀번호는 8자 이상 입력해주세요'
        name='password'
        onChange={onChange}
        value={password}
        type='password'
      />
      <S.Button
        disabled={disabled}
        onClick={(e) => {
          onClick(e);
          navigate('/signin');
        }}
        data-testid='signup-button'
      >
        회원가입
      </S.Button>
    </S.Form>
  );
}

export default Join;

import styled from 'styled-components';

const UserIcon = () => {
  const nickname = '닉네임';
  const firstWord = nickname.slice(0, 1);

  return <IconWrap>{firstWord}</IconWrap>;
};

const IconWrap = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #06f;
  color: #fff;
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export default UserIcon;

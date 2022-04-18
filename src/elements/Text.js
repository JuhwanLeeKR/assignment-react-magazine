import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
  const {
    bold,
    color,
    size,
    _onClick,
    children,
    margin,
    is_header,
    align,
    width,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    align: align,
    width: width,
  };

  if (is_header) {
    return (
      <Header {...styles} onClick={_onClick}>
        {children}
      </Header>
    );
  }

  return (
    <P {...styles} onClick={_onClick}>
      {children}
    </P>
  );
};

Text.defaultProps = {
  children: null,
  bold: false,
  color: '#222831',
  size: '14px',
  margin: false,
  _onClick: () => {},
  width: null,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: ${(props) => props.margin};
  cursor: default;
  width: null;
`;

const Header = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: ${(props) => props.margin};
  cursor: default;
`;

export default Text;

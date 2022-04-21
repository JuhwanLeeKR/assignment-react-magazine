import styled from 'styled-components';

const Text = (props) => {
  const {
    bold,
    color,
    size,
    _onClick,
    children,
    margin,
    align,
    width,
    is_wrap,
  } = props;

  const styles = {
    bold: bold,
    color: color,
    size: size,
    margin: margin,
    align: align,
    width: width,
    is_wrap: is_wrap,
  };

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
  size: '16px',
  margin: false,
  _onClick: () => {},
  width: null,
  is_wrap: false,
};

const P = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bold ? '600' : '400')};
  margin: ${(props) => props.margin};
  cursor: default;
  width: null;
  text-align: ${(props) => props.align};
  white-space: ${(props) => (props.is_wrap ? 'wrap' : 'nowrap')};
`;

export default Text;

import styled from 'styled-components';

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src: src,
    size: size,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }
  return (
    <>
      <ImageDefault {...styles}></ImageDefault>
    </>
  );
};

Image.defaultProps = {
  src: 'http://via.placeholder.com/600x400',
  size: 36,
};

const ImageDefault = styled.div`
  background-image: url('${(props) => props.src}');
  width: 100%;
  height: 400px;
`;

const AspectOutter = styled.div`
  height: 100%;
  min-width: 200px;
`;

const SideRectangle = styled.div`
  position: relative;
  padding-top: 150%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height};
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
  height: ${(props) => props.height};
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 4px;
  background-position: center;
`;

export default Image;

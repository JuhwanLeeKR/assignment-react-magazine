import styled from 'styled-components';
import React from 'react';

const Image = (props) => {
  const { shape, src, size, height } = props;

  const styles = {
    src: src,
    size: size,
    height: height,
  };

  if (shape === 'circle') {
    return <ImageCircle {...styles}></ImageCircle>;
  }

  if (shape === 'rectangle') {
    return (
      <AspectOutter>
        <AspectInner {...styles}></AspectInner>
      </AspectOutter>
    );
  }

  if (shape === 'right-retangle' || 'left-rectangle') {
    return (
      <AspectOutter>
        <SideRectangle {...styles}></SideRectangle>
      </AspectOutter>
    );
  }
  return (
    <>
      <ImageDefault {...styles}></ImageDefault>
    </>
  );
};

Image.defaultProps = {
  shape: 'circle',
  src: 'https://mblogthumb-phinf.pstatic.net/MjAxODA4MTRfMTg5/MDAxNTM0MjMxMjc2NDg0.nN09_SoZ3mJwyUmMojQTWIvyFSogw_BzuD9QvY0pXsMg.zj66-K3JIfjREQqTrm3byi1fGtYbv04NBpoQ2vISYhwg.JPEG.luckynjoy/1.jpg?type=w800',
  size: 36,
};

const ImageDefault = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  background-image: url('${(props) => props.src}');
  background-size: cover;
  background-position: center;
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

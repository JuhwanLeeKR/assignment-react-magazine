import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../elements';
import { actionCreators as imageActions } from '../redux/modules/image';

const Upload = (props) => {
  const dispatch = useDispatch();
  const is_uploading = useSelector((state) => state.image.uploading);
  const fileInput = React.useRef();

  const selectFile = (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.files[0]);

    console.log(fileInput.current.files[0]);

    // 미리보기
    const reader = new FileReader();
    const file = fileInput.current.files[0];

    reader.readAsDataURL(file);
    // 읽기가 끝나면 실행된다
    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
    };
  };

  // const uploadFB = () => {
  //   let image = fileInput.current.files[0];
  //   dispatch(imageActions.uploadImageFB(image));
  // };

  return (
    <React.Fragment>
      <input
        type='file'
        onChange={selectFile}
        ref={fileInput}
        disabled={is_uploading}
        accept='.gif, .jpg, .png'
      />
      {/* <Button _onClick={uploadFB}>업로드하기</Button> */}
    </React.Fragment>
  );
};

export default Upload;

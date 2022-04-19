import React, { useState } from 'react';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';

import { useSelector, useDispatch } from 'react-redux';
import post, { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';
import { textAlign } from '@mui/system';

const PostWrite = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector((state) => state.image.preview);
  const post_list = useSelector((state) => state.post.list);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  const { history } = props;

  let _post = is_edit ? post_list.find((p) => p.id === post_id) : null;

  const [contents, setContents] = useState(_post ? _post.contents : '');
  const [imgPosition, setImgPosition] = useState(
    _post ? post.imgPosition : 'top'
  );

  React.useEffect(() => {
    if (is_edit && !_post) {
      console.log('포스트 정보가 없어요!');
      history.goBack();

      return;
    }

    if (is_edit) {
      dispatch(imageActions.setPreview(_post.image_url));
    }
  }, []);

  const changeContents = (e) => {
    setContents(e.target.value);
  };

  const is_checked = (e) => {
    if (e.target.checked) {
      setImgPosition(e.target.value);
    }
  };

  const addPost = () => {
    dispatch(postActions.addPostFB(contents, imgPosition));
  };

  const editPost = () => {
    dispatch(
      postActions.editPostFB(post_id, { contents: contents, imgPosition })
    );
  };

  if (!is_login) {
    return (
      <Grid margin='100px 0px' padding='16px' center>
        <Text size='32px' bold>
          앗! 잠깐!
        </Text>
        <Text size='16px'>로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace('/');
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid padding='16px'>
        <Text margin='0px 0px 8px 0px' size='24px' bold>
          {is_edit ? '수정이 필요하신가요?' : '게시글을 작성해주세요!'}
        </Text>
        <Upload />
      </Grid>
      <Grid>
        <Grid padding='16px'>
          <Text margin='0px' size='24px' bold align='center'>
            IMG Preview🔎
          </Text>
        </Grid>

        <Image
          shape='rectangle'
          src={preview ? preview : 'http://via.placeholder.com/400x300'}
        />
      </Grid>
      <Grid
        padding='3px 8px'
        margin='8px'
        width=''
        border='1.4px solid #ccc'
        bg='#fafafa'
      >
        <Text margin='2px 0px 8px 0px' size='20px'>
          레이아웃을 선택해주세요✨
        </Text>
        <input
          type='radio'
          value='top'
          id='top'
          name='imgPosition'
          onChange={is_checked}
        />
        <label htmlFor='top'>이미지 상단</label>
        <input
          type='radio'
          value='right'
          id='right'
          name='imgPosition'
          onChange={is_checked}
        />
        <label htmlFor='right'>이미지 우측</label>
        <input
          type='radio'
          value='left'
          id='left'
          name='imgPosition'
          onChange={is_checked}
        />
        <label htmlFor='left'>이미지 좌측</label>
        <Text size='12px' margin='4px' color='#bbb'>
          미선택시 기본 값(상단)으로 설정됩니다.
        </Text>
      </Grid>

      <Grid padding='16px'>
        <Input
          value={contents}
          _onChange={changeContents}
          label='게시글 내용'
          placeholder='내용을 입력해주세요😊'
          multiLine
        />
      </Grid>

      <Grid padding='16px'>
        {is_edit ? (
          <Button
            text='수정하기'
            _onClick={editPost}
            _disabled={!preview || contents === '' ? true : false}
          ></Button>
        ) : (
          <Button
            text='추가하기'
            _onClick={addPost}
            _disabled={!preview || contents === '' ? true : false}
          ></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;

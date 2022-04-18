import React, { useState } from 'react';
import { Grid, Text, Button, Image, Input } from '../elements';
import Upload from '../shared/Upload';

import { useSelector, useDispatch } from 'react-redux';
import post, { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as imageActions } from '../redux/modules/image';

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
  const [imgPostion, setImgPosition] = useState(
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
    dispatch(postActions.addPostFB(contents));
  };

  const editPost = () => {
    dispatch(postActions.editPostFB(post_id, { contents: contents }));
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
        <Text margin='0px' size='36px' bold>
          {is_edit ? '게시글 수정' : '게시글 작성'}
        </Text>
        <Upload />
      </Grid>
      <input
        type='radio'
        value='top'
        name='imgPosition'
        onChange={is_checked}
      />
      <input
        type='radio'
        value='right'
        name='imgPosition'
        onChange={is_checked}
      />
      <input
        type='radio'
        value='left'
        name='imgPosition'
        onChange={is_checked}
      />
      <Grid>
        <Grid padding='16px'>
          <Text margin='0px' size='24px' bold>
            미리보기
          </Text>
        </Grid>

        <Image
          shape='rectangle'
          src={preview ? preview : 'http://via.placeholder.com/400x300'}
        />
      </Grid>

      <Grid padding='16px'>
        <Input
          value={contents}
          _onChange={changeContents}
          label='게시글 내용'
          placeholder='게시글 작성'
          multiLine
        />
      </Grid>

      <Grid padding='16px'>
        {is_edit ? (
          <Button text='게시글 수정' _onClick={editPost}></Button>
        ) : (
          <Button text='게시글 작성' _onClick={addPost}></Button>
        )}
      </Grid>
    </React.Fragment>
  );
};

export default PostWrite;

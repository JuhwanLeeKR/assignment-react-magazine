import React from 'react';
import Post from '../components/Post';
import CommentList from '../components/CommentList';
import CommentWrite from '../components/CommentWrite';

import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

const PostDetail = (props) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;

  const user_info = useSelector((state) => state.user.user);

  const post_list = useSelector((store) => store.post.list);

  const post_idx = post_list.findIndex((p) => p.id === id);
  const post = post_list[post_idx];

  React.useEffect(() => {
    // post data가 있다면 반복을 막아주기 위해 사용
    if (post) {
      return;
    }

    dispatch(postActions.getOnePostFB(id));
  }, []);

  return (
    <React.Fragment>
      {post && (
        <Post {...post} is_me={post.user_info.user_id === user_info?.uid} />
      )}

      <CommentWrite post_id={id} />
      <CommentList post_id={id} />
    </React.Fragment>
  );
};

export default PostDetail;

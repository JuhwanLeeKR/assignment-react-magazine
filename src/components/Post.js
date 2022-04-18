import React from 'react';
import { Grid, Image, Text, Button } from '../elements';
import { history } from '../redux/configureStore';
import { actionCreators as postActions } from '../redux/modules/post';
import { useDispatch } from 'react-redux';

import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = React.memo((props) => {
  const dispatch = useDispatch();

  const { id } = props;

  const deleteClick = () => {
    if (!window.confirm('삭제하시겠습니까?')) {
      return;
    }
    dispatch(postActions.deletePostFB(id));
  };

  console.log('렌더링 되었습니다');
  console.log();
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex padding='16px'>
          <Grid is_flex width='auto'>
            <Image shape='circle' src={props.src} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          <Grid is_flex width='auto'>
            <Text>{props.insert_dt}</Text>
          </Grid>
        </Grid>
        <Grid padding='16px'>
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape='rectangle' src={props.image_url} />
        </Grid>
        <Grid padding='16px'>
          <Grid is_flex>
            <Grid is_flex width='100px'>
              <FavoriteIcon style={{ color: '#8e97af' }} />
              <Text>좋아요 0개</Text>
            </Grid>
            <Text bold style={{ whiteSpace: 'nowrap' }}>
              댓글 {props.comment_cnt}개
            </Text>
          </Grid>
          <Grid is_flex width='100px'>
            {props.is_me && window.location.pathname.includes('/post') && (
              <>
                <Button
                  padding='5px'
                  margin='4px'
                  _onClick={() => {
                    history.push(`/write/${props.id}`);
                  }}
                >
                  수정
                </Button>
                <Button padding='5px' margin='4px' _onClick={deleteClick}>
                  삭제
                </Button>
              </>
            )}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

Post.defaultProps = {
  user_info: {
    user_name: 'juhwan',
    user_profile: '',
  },
  image_url: '',
  contents: 'none',
  comment_cnt: 0,
  insert_dt: '2022-04-18 10:00:00',
  is_me: false,
};

export default Post;

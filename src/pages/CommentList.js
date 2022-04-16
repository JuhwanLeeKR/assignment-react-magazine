import React from 'react';
import { Grid, Image, Text } from '../elements';

const CommentList = () => {
  return (
    <React.Fragment>
      <Grid padding='16px'>
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
        <CommentItem />
      </Grid>
    </React.Fragment>
  );
};

export default CommentList;

const CommentItem = (props) => {
  const { user_profile, user_name, user_id, post_id, contents, insert_dt } =
    props;
  return (
    <Grid is_flex>
      <Grid is_flex width='auto'>
        <Image shape='circle' />
        <Text bold>{user_name}</Text>
      </Grid>
      <Grid is_flex margin='0px 4px'>
        <Text margin='0px'>{contents}</Text>
        <Text margin='0px'>{insert_dt}</Text>
      </Grid>
    </Grid>
  );
};

CommentItem.defaultProps = {
  user_profile: '',
  user_name: 'juhwan',
  user_id: '',
  post_id: 1,
  contents: '귀여운 친칠라네요!',
  insert_dt: '2022-04-16 13:00:00',
};

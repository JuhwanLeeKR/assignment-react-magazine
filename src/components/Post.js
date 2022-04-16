import React from 'react';

import { Grid, Image, Text } from '../elements';

const Post = (props) => {
  return (
    <>
      <Grid>
        <Grid is_flex>
          <Grid is_flex width='100px'>
            <Image shape='circle' src={props.image_url} />
            <Text bold>{props.user_info.user_name}</Text>
          </Grid>
          {/* <Grid is_flex></Grid> */}
          <Text>{props.insert_dt}</Text>
        </Grid>
        <Grid padding='16px'>
          <Text>{props.contents}</Text>
        </Grid>
        <Grid>
          <Image shape='rectangle' src={props.image_url} />
        </Grid>
        <Grid padding='16px'>
          <Text bold>댓글 {props.comment_cnt}개</Text>
        </Grid>
      </Grid>
    </>
  );
};

Post.defaultProps = {
  user_info: {
    user_name: 'juhwan',
    user_profile:
      'https://mimg.segye.com/content/image/2017/07/22/20170722505000.jpg',
  },
  image_url:
    'https://mimg.segye.com/content/image/2017/07/22/20170722505000.jpg',
  contents: '친칠라네요!',
  comment_cnt: 10,
  insert_dt: '2022-04-14 13:17:00',
};

export default Post;

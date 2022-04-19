import React from 'react';
import { Grid, Text, Image } from '../elements';

import { history } from '../redux/configureStore';

const Card = (props) => {
  const { image_url, user_name, post_id } = props;

  return (
    <Grid
      _onClick={() => {
        history.push(`/post/${post_id}`);
      }}
      padding='16px'
      is_flex
      bg='#ffffff'
      margin='8px 0px'
      style={{ cursor: 'pointer' }}
    >
      <Grid width='auto' margin='0px 8px 0px 0px'>
        <Image src={image_url} size={85} />
      </Grid>
      <Grid>
        <Text>
          <b>{user_name}</b>님이 게시글에 댓글을 남겼습니다👍{' '}
        </Text>
      </Grid>
    </Grid>
  );
};

Card.defaultProps = {
  image_url: 'http://via.placeholder.com/400x300',
};

export default Card;

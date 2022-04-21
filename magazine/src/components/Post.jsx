import { Grid, Text, Button } from '../elements';
import styled from 'styled-components';
import { apis } from '../shared/axios';
import { Image } from '../elements';

import FavoriteIcon from '@mui/icons-material/Favorite';

const Post = (props) => {
  const testBtn = async () => {
    await apis.postList().then((response) => {
      console.log(response.data.rows);
    });
  };

  return (
    <>
      <PostWrapper>
        <Grid is_flex padding='10px'>
          <Grid flex>
            <Image shape='circle' />
            <p>닉네임</p>
          </Grid>
          <Text>2022-04-21 15:57:00</Text>
        </Grid>
        <Image />
        <Grid padding='16px'>
          <Text wrap>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Text>
        </Grid>
        <Grid padding='14px'>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Grid is_flex width='130px'>
              <Button padding='5px' margin='4px'>
                수정
              </Button>
              <Button padding='5px' margin='4px'>
                삭제
              </Button>
            </Grid>
          </div>
          <Grid is_flex margin='10px 0 0 0'>
            <Grid is_flex width='110px'>
              <FavoriteIcon style={{ color: '#8e97af' }} />
              <Text>좋아요 0개</Text>
            </Grid>
            <Text bold>댓글 0개</Text>
          </Grid>
        </Grid>
      </PostWrapper>
    </>
  );
};

const PostWrapper = styled.article``;

export default Post;

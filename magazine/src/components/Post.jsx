import { Grid, Text } from '../elements';
import styled from 'styled-components';
import { apis } from '../shared/axios';

const Post = (props) => {
  const testBtn = async () => {
    await apis.postList().then((response) => {
      console.log(response.data.rows);
    });
  };

  return (
    <>
      <PostWrapper>
        <div>Post입니다</div>
        <button onClick={testBtn}> postList 잘 가져와지는지 test 버튼</button>
        {/* <Grid is_flex padding='16px'>
          <Grid is_flex width='auto'>
            <Text bold>글씨</Text>
          </Grid>
          <Grid is_flex width='auto'>
            <Text>내용</Text>
          </Grid>
        </Grid> */}
      </PostWrapper>
    </>
  );
};

const PostWrapper = styled.article`
  height: 100px;
  border: 1px solid #000;
`;

export default Post;

import { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { Grid, Button, Text, Image } from '../elements';

const PostWrite = () => {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <>
      <div>PostWrite page 입니다.</div>
      <ToggleButtonGroup
        color='primary'
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value='top'>TOP</ToggleButton>
        <ToggleButton value='left'>LEFT</ToggleButton>
        <ToggleButton value='right'>RIGHT</ToggleButton>
      </ToggleButtonGroup>
      {/* <Grid padding='16px'>
        <Text margin='0px 0px 8px 0px' size='24px' bold>
          게시글을 작성해주세요!
        </Text>
      </Grid>
      <Grid>
        <Grid padding='16px'>
          <Text margin='0px' size='24px' bold align='center'>
            IMG Preview🔎
          </Text>
        </Grid>

        <Image shape='rectangle' src={'http://via.placeholder.com/600x400'} />
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
        <input type='radio' value='top' id='top' name='imgPosition' />
        <label htmlFor='top'>이미지 상단</label>
        <input type='radio' value='right' id='right' name='imgPosition' />
        <label htmlFor='right'>이미지 우측</label>
        <input type='radio' value='left' id='left' name='imgPosition' />
        <label htmlFor='left'>이미지 좌측</label>
        <Text size='12px' margin='4px' color='#bbb'>
          미선택시 기본 값(상단)으로 설정됩니다.
        </Text>
      </Grid>

      <Grid padding='16px'>
        <input label='게시글 내용' placeholder='내용을 입력해주세요😊' />
      </Grid>

      <Grid padding='16px'>
        <Button text='추가하기'></Button>
      </Grid> */}
    </>
  );
};

export default PostWrite;

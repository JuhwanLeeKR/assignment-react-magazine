import React from 'react';
import _ from 'lodash';

const Search = () => {
  const [text, setText] = React.useState('');

  const debounce = _.debounce((e) => {
    console.log(e.target.value);
  }, 1000);

  const throttle = _.throttle((e) => {
    console.log(e.target.value);
  }, 1000);

  const onChange = (e) => {
    console.log(e.target.value);
    keyPress();
  };
  const keyPress = React.useCallback(debounce, [text]);

  return (
    <div>
      <input type='text' onChange={keyPress} />
    </div>
  );
};

export default Search;

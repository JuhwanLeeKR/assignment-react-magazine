import { Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import styled from 'styled-components';

import PostDetail from '../pages/PostDetail';
import PostList from '../pages/PostList';
import PostWrite from '../pages/PostWrite';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Notification from '../pages/Notification';
import { ReactComponent as Vally } from '../assets/Vally.svg';

import Header from '../components/Header';

function App() {
  return (
    <>
      <GlobalStyle />
      <Vally />
      <LayoutOutter>
        <Header />
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/write' element={<PostWrite />} />
          <Route path='/post/detail' element={<PostDetail />} />
          <Route path='/noti' element={<Notification />} />
        </Routes>
      </LayoutOutter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: none;
  } ::-webkit-scrollbar { display: none; }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  * { box-sizing:border-box}
`;

const LayoutOutter = styled.div`
  min-height: 100vh;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.6);
  border: 0.7px solid #ddd;
  height: 100%;
`;

export default App;

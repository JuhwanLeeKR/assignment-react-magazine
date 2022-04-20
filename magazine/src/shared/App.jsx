import { Route, Routes } from 'react-router-dom';
import PostDetail from '../pages/PostDetail';
import PostList from '../pages/PostList';
import PostWrite from '../pages/PostWrite';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Notification from '../pages/Notification';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<PostList />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/write' element={<PostWrite />} />
        <Route path='/write/:post_id' element={<PostDetail />} />
        <Route path='/noti' element={<Notification />} />
      </Routes>
    </>
  );
}

export default App;

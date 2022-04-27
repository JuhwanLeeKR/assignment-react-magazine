import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apis } from '../../shared/axios';
import {
  setCookie,
  getTokenFromCookie,
  removeTokenFromCookie,
} from '../../shared/cookie';

const initialState = {
  email: null,
  nickname: null,
  isLogin: false,
  isLoading: false,
};

export const signupDB = createAsyncThunk(
  'user/signup',
  async ({ data, navigate }, thunkAPI) => {
    try {
      await apis.signup(data).then((response) => {
        navigate('/', { replace: true });
        alert('회원가입 완료!');
      });
      return;
    } catch (err) {
      alert(thunkAPI.rejectWithValue(err.response.data).payload.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  'user/signin',
  async ({ data, navigate }, thunkAPI) => {
    //console.log(data, navigate);
    try {
      await apis.signin(data).then((response) => {
        //console.log(response.data.token);
        setCookie(response.data.token);
        navigate('/', { replace: true });
        alert('로그인 완료!');
      });
    } catch (err) {
      alert(thunkAPI.rejectWithValue(err.response.data).payload.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const signout = createAsyncThunk(
  'user/signout',
  async (dispatch, navigate) => {
    try {
      dispatch(user.actions.logout());
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err);
    }
  }
);

export const auth = createAsyncThunk('user/auth', async (_, thunkAPI) => {
  try {
    const token = getTokenFromCookie();
    await apis.auth(token).then((response) => {
      console.log(response);
      const user = {
        user_id: response.data.user.user_id,
        email: response.data.user.email,
        nickname: response.data.user.nickname,
      };
      console.log(user);

      return user;
    });
  } catch (err) {
    console.log(err.response.data.message);
    //console.log(thunkAPI.rejectWithValue(err.response.data.message));
    return thunkAPI.rejectWithValue(err.response.data.message);
  }
});

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      console.log(action.payload);
      state.email = action.payload;
      state.isLogin = action.payload;
    },
    logout: (state) => {
      removeTokenFromCookie();
      state.nickname = null;
      state.email = null;
      state.isLogin = false;
    },
  },
  extraReducers: {
    [signupDB.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signupDB.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signupDB.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [signin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signin.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [signin.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [auth.pending]: (state, action) => {
      state.isLoading = true;
    },
    [auth.fulfilled]: (state, action) => {
      state.isLogin = true;
      state.isLoading = false;
    },
  },
});

export default user.reducer;

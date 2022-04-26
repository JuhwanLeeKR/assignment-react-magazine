import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apis } from '../../shared/axios';
import { setCookie } from '../../shared/cookie';

export const signupDB = createAsyncThunk(
  'user/signup',
  async (data, thunkAPI) => {
    try {
      await apis.signup(data);
      return;
    } catch (err) {
      alert(thunkAPI.rejectWithValue(err.response.data).payload.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const signin = createAsyncThunk(
  'user/signin',
  async (data, thunkAPI) => {
    try {
      await apis.signin(data).then((response) => {
        console.log(response);
        //setCookie(response.data.token);
        return { ok };
      });
    } catch (err) {
      alert(thunkAPI.rejectWithValue(err.response.data).payload.message);
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const auth = createAsyncThunk('user/auth', async (_, thunkAPI) => {
  try {
    const response = await apis.auth();
    console.log(response);
    const user = {
      // user_id: 'string',
      // email: 'string',
      // nickname: 'string',
      // role: 'number',
    };
    return user;
  } catch (err) {
    console.log(thunkAPI.rejectWithValue());
    return thunkAPI.rejectWithValue(err.response.message);
  }
});

const user = createSlice({
  name: 'userReducer',
  initialState: {
    isLogin: false,
    nickname: '',
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
  },
});

export default user.reducer;

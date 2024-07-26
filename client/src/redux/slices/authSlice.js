import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get("http://localhost:3001/api/user");
    return response.data.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteUser = createAsyncThunk("auth/deleteUser", async (_, { dispatch, rejectWithValue }) => {
  try {
    await axios.delete("http://localhost:3001/api/user");
    dispatch(fetchUserData());
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (user, { dispatch, rejectWithValue }) => {
  try {
    await axios.post("http://localhost:3001/api/user/login", {
      username: user.username,
      password: user.password,
    });
    dispatch(fetchUserData());
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return rejectWithValue(message);
    }
    return rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async (_, { dispatch }) => {
  await axios.delete("http://localhost:3001/api/user/logout");
  dispatch(fetchUserData());
});

export const registerUser = createAsyncThunk("auth/registerUser", async (user, { dispatch, rejectWithValue }) => {
  try {
    await axios.post("http://localhost:3001/api/user/register", {
      username: user.username,
      email: user.email,
      password: user.password,
      passwordConfirm: user.passwordConfirm,
      region: user.region,
    });
    dispatch(fetchUserData());
  } catch (error) {
    if (error.response) {
      const message = error.response.data.message;
      return rejectWithValue(message);
    }
    return rejectWithValue(error.message);
  }
});

export const editUser = createAsyncThunk("auth/editUser", async (user, { dispatch, rejectWithValue }) => {
  try {
    await axios.patch("http://localhost:3001/api/user", user);
    dispatch(fetchUserData());
  } catch (error) {
    if (error.response) {
      const message = error.response.data;
      return rejectWithValue(message);
    }
    return rejectWithValue(error.message);
  }
});

const initialState = {
  isLogin: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLogin = true;
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.isLogin = false;
      state.user = null;
      state.isLoading = false;
    });
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogin = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.isLoading = false;
      state.isLogin = false;
    });
    builder.addCase(logoutUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.isLoading = false;
      state.isLogin = true;
    });
    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
    });
    builder.addCase(deleteUser.rejected, (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;

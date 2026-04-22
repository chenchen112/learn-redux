import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserState } from '@/shared/types';
import { fetchUsersApi } from '@/shared/utils';

const initialState: UserState = {
  users: [],
  selectedUserId: null,
  searchQuery: '',
  currentPage: 1,
  pageSize: 5,
  total: 0,
  loading: false,
};

export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async (_, { getState }) => {
    const state = getState() as { user: UserState };
    const { currentPage, pageSize, searchQuery } = state.user;
    return await fetchUsersApi(currentPage, pageSize, searchQuery);
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUserId = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state, action) => {
      state.pageSize = action.payload;
      state.currentPage = 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload.users;
        state.total = action.payload.total;
      });
  },
});

export const { selectUser, setSearchQuery, setPage, setPageSize } =
  userSlice.actions;
export default userSlice.reducer;

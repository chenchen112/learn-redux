import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToolkitRootState, ToolkitAppDispatch } from '../store';
import { UserState, UserActions } from '@/shared/types';
import {
  fetchUsers,
  selectUser,
  setSearchQuery,
  setPage,
  setPageSize,
} from '../userSlice';

export const useToolkitUser = (): [UserState, UserActions] => {
  const state = useSelector((state: ToolkitRootState) => state.user);
  const dispatch = useDispatch<ToolkitAppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, state.currentPage, state.pageSize, state.searchQuery]);

  const actions: UserActions = {
    fetchUsers: useCallback(() => dispatch(fetchUsers()), [dispatch]),
    selectUser: useCallback((id) => dispatch(selectUser(id)), [dispatch]),
    setSearchQuery: useCallback(
      (query) => dispatch(setSearchQuery(query)),
      [dispatch]
    ),
    setPage: useCallback((page) => dispatch(setPage(page)), [dispatch]),
    setPageSize: useCallback(
      (size) => dispatch(setPageSize(size)),
      [dispatch]
    ),
  };

  return [state, actions];
};

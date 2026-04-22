import { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ReduxRootState } from '../store';
import { UserState, UserActions } from '@/shared/types';
import {
  fetchUsers,
  selectUser,
  setSearchQuery,
  setPage,
  setPageSize,
} from '../user';

export const useReduxUser = (): [UserState, UserActions] => {
  const state = useSelector((state: ReduxRootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers() as any);
  }, [dispatch, state.currentPage, state.pageSize, state.searchQuery]);

  const actions: UserActions = {
    fetchUsers: useCallback(
      () => dispatch(fetchUsers() as any),
      [dispatch]
    ),
    selectUser: useCallback(
      (id) => dispatch(selectUser(id)),
      [dispatch]
    ),
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

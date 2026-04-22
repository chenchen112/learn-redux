import { User } from '@/shared/types';
import { fetchUsersApi } from '@/shared/utils';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  SELECT_USER,
  SET_SEARCH_QUERY,
  SET_PAGE,
  SET_PAGE_SIZE,
} from './types';

export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users: User[], total: number) => ({
  type: FETCH_USERS_SUCCESS,
  payload: { users, total },
});
export const selectUser = (id: string | null) => ({
  type: SELECT_USER,
  payload: id,
});
export const setSearchQuery = (query: string) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
export const setPage = (page: number) => ({ type: SET_PAGE, payload: page });
export const setPageSize = (size: number) => ({
  type: SET_PAGE_SIZE,
  payload: size,
});

export const fetchUsers = () => {
  return async (dispatch: any, getState: any) => {
    dispatch(fetchUsersRequest());
    const { currentPage, pageSize, searchQuery } = getState().user;
    const result = await fetchUsersApi(currentPage, pageSize, searchQuery);
    dispatch(fetchUsersSuccess(result.users, result.total));
  };
};

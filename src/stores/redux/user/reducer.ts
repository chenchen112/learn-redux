import { UserState } from '@/shared/types';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  SELECT_USER,
  SET_SEARCH_QUERY,
  SET_PAGE,
  SET_PAGE_SIZE,
} from './types';

const initialState: UserState = {
  users: [],
  selectedUserId: null,
  searchQuery: '',
  currentPage: 1,
  pageSize: 5,
  total: 0,
  loading: false,
};

export default function userReducer(
  state = initialState,
  action: any
): UserState {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        total: action.payload.total,
        loading: false,
      };
    case SELECT_USER:
      return { ...state, selectedUserId: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload, currentPage: 1 };
    case SET_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload, currentPage: 1 };
    default:
      return state;
  }
}

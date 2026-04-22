import { create } from 'zustand';
import { UserState, UserActions } from '@/shared/types';
import { fetchUsersApi } from '@/shared/utils';

interface UserStore extends UserState, UserActions {}

export const useZustandUser = create<UserStore>((set, get) => ({
  users: [],
  selectedUserId: null,
  searchQuery: '',
  currentPage: 1,
  pageSize: 5,
  total: 0,
  loading: false,
  
  fetchUsers: async () => {
    const { currentPage, pageSize, searchQuery } = get();
    set({ loading: true });
    const result = await fetchUsersApi(currentPage, pageSize, searchQuery);
    set({ users: result.users, total: result.total, loading: false });
  },
  
  selectUser: (id: string | null) => {
    set({ selectedUserId: id });
  },
  
  setSearchQuery: (query: string) => {
    set({ searchQuery: query, currentPage: 1 });
    get().fetchUsers();
  },
  
  setPage: (page: number) => {
    set({ currentPage: page });
    setTimeout(() => get().fetchUsers(), 0);
  },
  
  setPageSize: (size: number) => {
    set({ pageSize: size, currentPage: 1 });
    setTimeout(() => get().fetchUsers(), 0);
  },
}));

useZustandUser.getState().fetchUsers();

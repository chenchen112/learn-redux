export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: 'admin' | 'user' | 'guest';
  status: 'active' | 'inactive';
}

export interface UserState {
  users: User[];
  selectedUserId: string | null;
  searchQuery: string;
  currentPage: number;
  pageSize: number;
  total: number;
  loading: boolean;
}

export interface UserActions {
  fetchUsers: () => Promise<unknown>;
  selectUser: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setPage: (page: number) => void;
  setPageSize: (size: number) => void;
}

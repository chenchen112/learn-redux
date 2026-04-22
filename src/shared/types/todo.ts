export type TodoFilter = 'all' | 'completed' | 'active';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
  loading: boolean;
}

export interface TodoActions {
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: TodoFilter) => void;
  clearCompleted: () => void;
}

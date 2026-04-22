import { TodoState, Todo } from '@/shared/types';
import { generateId } from '@/shared/utils';
import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  SET_FILTER,
  CLEAR_COMPLETED,
} from './types';

const initialState: TodoState = {
  todos: [],
  filter: 'all',
  loading: false,
};

export default function todoReducer(
  state = initialState,
  action: any
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      const newTodo: Todo = {
        id: generateId(),
        text: action.payload,
        completed: false,
        createdAt: Date.now(),
      };
      return { ...state, todos: [...state.todos, newTodo] };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
}

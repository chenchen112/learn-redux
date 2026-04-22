export interface CounterState {
  count: number;
  loading: boolean;
}

export interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementAsync: () => Promise<unknown>;
}

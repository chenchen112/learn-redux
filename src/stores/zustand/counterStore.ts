import { create } from 'zustand';
import { CounterState, CounterActions } from '@/shared/types';

interface CounterStore extends CounterState, CounterActions {}

export const useZustandCounter = create<CounterStore>(set => ({
  count: 0,
  loading: false,
  
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  incrementAsync: async () => {
    set({ loading: true });
    await new Promise(resolve => setTimeout(resolve, 1000));
    set(state => ({ count: state.count + 1, loading: false }));
  },
}));

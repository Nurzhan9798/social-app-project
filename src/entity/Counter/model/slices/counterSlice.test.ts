import { CounterScheme } from 'entity/Counter';
import { counterAction, counterReducer } from './counterSlice';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterScheme = { value: 10 };
        expect(counterReducer(state, counterAction.decrement)).toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterScheme = { value: 10 };
        expect(counterReducer(state, counterAction.increment)).toEqual({ value: 11 });
    });
    test('with empty state', () => {
        expect(counterReducer(undefined, counterAction.increment)).toEqual({ value: 1 });
    });
});

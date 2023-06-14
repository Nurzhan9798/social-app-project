import { CounterScheme } from 'entity/Counter';
import { UserScheme } from 'entity/User';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme
}

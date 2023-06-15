import { CounterScheme } from 'entity/Counter';
import { UserScheme } from 'entity/User';
import { LoginFormScheme } from 'feature/AuthByUsername';

export interface StateScheme {
    counter: CounterScheme;
    user: UserScheme;
    loginForm: LoginFormScheme;
}

import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import axios, { AxiosInstance } from 'axios';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>;

    getState: () => StateSchema;

    actionCreator: (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

    api: jest.MockedFunctionDeep<AxiosInstance>;

    navigate: jest.MockedFn<any>;

    constructor(
        actionCreator: (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>,
        state?: DeepPartial<StateSchema>,
    ) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn(() => state as StateSchema);
        this.api = mockedAxios;
        this.navigate = jest.fn();
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        const result = await action(
            this.dispatch,
            this.getState,
            {
                api: this.api,
                navigate: this.navigate,
            },
        );

        return result;
    }
}

import { Profile } from 'entity/Profile';

export enum ProfileValidationErrors {
    NO_DATA = 'NO_DATA',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_USERNAME = 'INCORRECT_USER_USERNAME',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    INCORRECT_USER_CURRENCY = 'INCORRECT_USER_CURRENCY',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface EditableProfileCardSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    validationErrors?: ProfileValidationErrors[];
    readonly: boolean;
}

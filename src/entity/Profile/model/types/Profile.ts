import { Country } from 'entity/Country/model/types/country';
import { Currency } from 'entity/Currency/model/types/currency';

export enum ProfileValidationErrors {
    NO_DATA = 'NO_DATA',
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_USER_USERNAME = 'INCORRECT_USER_USERNAME',
    INCORRECT_USER_AGE = 'INCORRECT_USER_AGE',
    INCORRECT_USER_COUNTRY = 'INCORRECT_USER_COUNTRY',
    INCORRECT_USER_CURRENCY = 'INCORRECT_USER_CURRENCY',
    SERVER_ERROR = 'SERVER_ERROR',
}
export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number,
    currency?: Currency,
    country?: Country;
    city?: string,
    username?: string;
    avatar?: string;
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    error?: string;
    validationErrors?: ProfileValidationErrors[];
    readonly: boolean;
}

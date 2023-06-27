import { Country } from 'entity/CountrySelect/model/types/country';
import { Currency } from 'entity/CurrencySelect/model/types/currency';

export interface Profile {
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
    readonly: boolean;
}

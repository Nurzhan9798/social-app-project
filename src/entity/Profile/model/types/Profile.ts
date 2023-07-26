import { Country } from 'entity/Country/model/types/country';
import { Currency } from 'entity/Currency/model/types/currency';

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

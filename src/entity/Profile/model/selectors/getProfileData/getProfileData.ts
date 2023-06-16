import { StateScheme } from 'app/providers/StoreProvider';
//
// const defaultValue: Profile = {
//     first: '',
//     lastname: '',
//     age: 0,
//     currency: undefined,
//     country: undefined,
//     city: '',
//     username: '',
//     avatar: '',
// };

export const getProfileData = (state: StateScheme) => state?.profile?.data;
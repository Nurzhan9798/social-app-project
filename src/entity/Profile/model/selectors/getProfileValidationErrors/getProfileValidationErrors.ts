import { StateScheme } from 'app/providers/StoreProvider';

export const getProfileValidationErrors = (state: StateScheme) => state.profile?.validationErrors;

import { Profile, ProfileValidationErrors } from '../../types/Profile';

export const validateProfileData = (profile?: Profile) => {
    const errors: ProfileValidationErrors[] = [];
    if (!profile) errors.push(ProfileValidationErrors.NO_DATA);

    if (!profile?.firstname || !profile.lastname) errors.push(ProfileValidationErrors.INCORRECT_USER_DATA);
    if (!profile?.username) errors.push(ProfileValidationErrors.INCORRECT_USER_USERNAME);

    if (Number.isNaN(profile?.age) || (profile?.age && profile.age < 0)) {
        errors.push(ProfileValidationErrors.INCORRECT_USER_AGE);
    }

    if (!profile?.country) errors.push(ProfileValidationErrors.INCORRECT_USER_COUNTRY);
    if (!profile?.currency) errors.push(ProfileValidationErrors.INCORRECT_USER_CURRENCY);

    return errors;
};

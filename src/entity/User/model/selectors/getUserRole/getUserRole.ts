import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { UserRole } from '../../types/User';

export const getUserRole = (state: StateSchema) => state.user?.authData?.roles;

export const isAdmin = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isManager = createSelector(getUserRole, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));

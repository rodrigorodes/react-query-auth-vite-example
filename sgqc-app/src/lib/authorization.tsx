import * as React from 'react';

import { User } from '@/features/users';

import { useAuth } from './auth';

export enum ROLES {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

type RoleTypes = keyof typeof ROLES;

export const POLICIES = {
  'competencia:edit': (user: User) => {
    if (user.role === 'ADMIN') {
      return true;
    }

    if (user.role === 'USER') {
      return true;
    }

    return false;
  },
};

export const useAuthorization = () => {
  const { user } = useAuth();

  let userAuth = user;

  if (user) {
     userAuth = user.user;
  }

  if (!userAuth) {
    throw Error('User does not exist!');
  }

  const checkAccess = React.useCallback(
    ({ allowedRoles }: { allowedRoles: RoleTypes[] }) => {
      if (allowedRoles && allowedRoles.length > 0) {
        return allowedRoles?.includes(userAuth.role);
      }

      return true;
    },
    [userAuth.role]
  );

  return { checkAccess, role: userAuth.role };
};

type AuthorizationProps = {
  forbiddenFallback?: React.ReactNode;
  children: React.ReactNode;
} & (
    | {
      allowedRoles: RoleTypes[];
      policyCheck?: never;
    }
    | {
      allowedRoles?: never;
      policyCheck: boolean;
    }
  );

export const Authorization = ({
  policyCheck,
  allowedRoles,
  forbiddenFallback = null,
  children,
}: AuthorizationProps) => {
  const { checkAccess } = useAuthorization();

  let canAccess = false;

  if (allowedRoles) {
    canAccess = checkAccess({ allowedRoles });
  }

  if (typeof policyCheck !== 'undefined') {
    canAccess = policyCheck;
  }

  console.log(canAccess);
  console.log(children);

  return <>{canAccess ? children : forbiddenFallback}</>;
};

import { initReactQueryAuth } from 'react-query-auth';

import {
  registerWithEmailAndPassword,
  loginWithEmailAndPassword,
  getUser,
  UserResponse,
  LoginCredentialsDTO,
  AuthUser,
} from '@/features/auth';
import storage from '@/utils/storage';
import { CircularProgress } from '@mui/material';
import { RegisterCredentialsDTO } from '../features/auth/api/register';

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
}

async function loadUser() {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
}

async function loginFn(data: LoginCredentialsDTO) {
  const response = await loginWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data);
  const user = await handleUserResponse(response);
  return user;
}

async function logoutFn() {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
}

const authConfig = {
  loadUser,
  loginFn,
  logoutFn,
  registerFn,
  LoaderComponent() {
    return (
      <div>
        <CircularProgress size="xl" />
      </div>
    );
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO
>(authConfig);

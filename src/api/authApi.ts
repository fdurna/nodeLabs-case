import { http } from './httpClient';

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignUpPayload {
  fullName: string;
  email: string;
  password: string;
}

export const authApi = {
  async signIn(payload: SignInPayload): Promise<any> {
    const { data } = await http.post<any>('/users/login', payload);
    return data;
  },

  async signUp(payload: SignUpPayload): Promise<any> {
    const { data } = await http.post<any>('/users/register', payload);
    return data;
  }
};

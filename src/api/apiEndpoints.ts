import { LoginPayload, RegisterPayload, User, BioDataFormData } from "@/types";
import { apiClient } from "./apiClient";

export const fetchCurrentUser = async (): Promise<User> => {
  const res = await apiClient.get('/accounts/user');
  return res.data;
};

export const login = async (data: LoginPayload): Promise<any> => {
  const res = await apiClient.post('/accounts/login/', data);
  return res.data;
};

export const logout = async (): Promise<any> => {
  const res = await apiClient.post('/accounts/logout/');
  return res.data;
};

export const register = async (data: RegisterPayload): Promise<any> => {
  const res = await apiClient.post('/accounts/register/', data);
  return res.data;
};

export const refreshToken = async (): Promise<User> => {
  const res = await apiClient.post('/accounts/refresh-token/');
  return res.data;
};

export const submitBioData = async (data: BioDataFormData): Promise<any> => {
  const res = await apiClient.post('/accounts/biodata/', data);
  return res.data;
}

export const getBioData = async (): Promise<BioDataFormData> => {
  const res = await apiClient.get('/accounts/biodata/');
  return res.data;
}
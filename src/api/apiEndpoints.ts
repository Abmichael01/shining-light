import { LoginPayload, RegisterPayload, User, BioDataFormData } from "@/types";
import { apiClient } from "./apiClient";
import { ModelSetClient } from "./ModelSetClient";

export const fetchCurrentUser = async (): Promise<User> => {
  const res = await apiClient.get('/students/user');
  return res.data;
};

export const login = async (data: LoginPayload): Promise<any> => {
  const res = await apiClient.post('/students/login/', data);
  return res.data;
};

export const logout = async (): Promise<any> => {
  const res = await apiClient.post('/students/logout/');
  return res.data;
};

export const register = async (data: RegisterPayload): Promise<any> => {
  const res = await apiClient.post('/students/register/', data);
  return res.data;
};

export const refreshToken = async (): Promise<User> => {
  const res = await apiClient.post('/students/refresh-token/');
  return res.data;
};

export const bioData = new ModelSetClient<BioDataFormData>("/students/biodata/");
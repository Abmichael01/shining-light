// lib/api/ModelSetClient.ts
import { apiClient } from "./apiClient"; // Your Axios instance

export class ModelSetClient<T> {
  constructor(private endpoint: string) {}

  list = async (): Promise<T[]> => {
    const res = await apiClient.get(this.endpoint);
    return res.data;
  };

  retrieve = async (id: number | string): Promise<T> => {
    const res = await apiClient.get(`${this.endpoint}${id}/`);
    return res.data;
  };

  retrieveSelf = async (): Promise<T> => {
    const url = this.endpoint.endsWith("/")
      ? `${this.endpoint}`
      : `${this.endpoint}`;
    const res = await apiClient.get(url);
    return res.data;
  };

  create = async (data: Partial<T>): Promise<T> => {
    const res = await apiClient.post(this.endpoint, data);
    return res.data;
  };

  update = async (id: number | string, data: Partial<T>): Promise<T> => {
    const res = await apiClient.patch(`${this.endpoint}${id}/`, data);
    return res.data;
  };

  delete = async (id: number | string): Promise<void> => {
    await apiClient.delete(`${this.endpoint}${id}/`);
  };
}

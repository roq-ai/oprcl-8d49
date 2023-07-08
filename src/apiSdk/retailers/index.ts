import axios from 'axios';
import queryString from 'query-string';
import { RetailerInterface, RetailerGetQueryInterface } from 'interfaces/retailer';
import { GetQueryInterface } from '../../interfaces';

export const getRetailers = async (query?: RetailerGetQueryInterface) => {
  const response = await axios.get(`/api/retailers${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createRetailer = async (retailer: RetailerInterface) => {
  const response = await axios.post('/api/retailers', retailer);
  return response.data;
};

export const updateRetailerById = async (id: string, retailer: RetailerInterface) => {
  const response = await axios.put(`/api/retailers/${id}`, retailer);
  return response.data;
};

export const getRetailerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/retailers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRetailerById = async (id: string) => {
  const response = await axios.delete(`/api/retailers/${id}`);
  return response.data;
};

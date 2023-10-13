import axios from "axios"
import { apiRootUrl } from "./config";

export const getStudents = async (payload) => {
  try {
    const response = await axios.get(apiRootUrl);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const createStudent = async (payload) => {
  try {
    const response = await axios.post(apiRootUrl, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateStudent = async (payload) => {
  try {
    const response = await axios.put(apiRootUrl, payload);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const deleteStudent = async (payload) => {
  try {
    const response = await axios.delete(apiRootUrl, { data: payload });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
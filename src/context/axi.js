// src/api.js
import axios from "axios";

const baseURL = "http://localhost:8080";

export async function getData(path) {
  try {
    const response = await axios.get(`${baseURL}/${path}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}

export async function postData(path, data) {
  try {
    const response = await axios.post(`${baseURL}/${path}`, data);
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error.message);
    throw error;
  }
}

export async function putData(path, data) {
  try {
    const response = await axios.put(`${baseURL}/${path}`, data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error.message);
    throw error;
  }
}

export async function deleteData(path) {
  try {
    const response = await axios.delete(`${baseURL}/${path}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting data:", error.message);
    throw error;
  }
}

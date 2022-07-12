import Axios from "../helper/Axios";
import response from "../models/todoResponseModel";

function getAllAsync() {
  return Axios.get<response>('api/WeatherForecast');
} 

function getByIndexAsync(index: string) {
  return Axios.get<string>(`api/WeatherForecast/${index}`);
} 

function createDataAsync(name: string) {
  const body = {
    name,
  };

  return Axios.post(`api/WeatherForecast`, body);
}

function editDataAsync(index: string, name: string) {
  const body = {
    name,
  };

  return Axios.put(`api/WeatherForecast/${index}`, body);
}

function deleteDataAsync(index: string) {
  return Axios.delete(`api/WeatherForecast/${index}`);
}

export default {
  getAllAsync,
  getByIndexAsync,
  createDataAsync,
  editDataAsync,
  deleteDataAsync,
}
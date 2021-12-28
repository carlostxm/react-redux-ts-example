import axios from "axios";
import { CounterDTO } from "./api.model";

export const API_URL = "http://localhost:3004/counter";

export const fetchCount = () => {
  return axios
    .get<CounterDTO>(API_URL)
    .then((response) => mapCountFromDTOToModel(response.data))
    .catch((message) => Promise.reject(message));
};

const mapCountFromDTOToModel = (dto: CounterDTO): number => {
  return dto.amount;
};

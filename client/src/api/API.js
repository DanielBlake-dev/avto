import axios from "axios";

const APIClient = axios.create({
  baseURL: "http://localhost:3001/",
});

export const API = {
  getResources: async () => {
    const { data } = await APIClient.get("resources");
    return data.data;
  },
  createOrder: async (payload) => {
    const { data } = await APIClient.post("orders", payload);
    return data;
  },
};

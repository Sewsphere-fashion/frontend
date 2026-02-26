import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-v1-5lq9.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const joinWaitlist = async (email: string, role: string) => {
  const response = await api.post("/api/waitlist", { email, role });
  return response.data;
};

export default api;
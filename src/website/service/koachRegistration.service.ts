/** @format */

import axios from "axios";
import { VITE_API } from "../../constant/env";

export const registerCoach = async (data: any): Promise<any> => {
  const response = await axios.post(
    `${VITE_API}/sports_Event/SportsRegistraion/registerPlayer`,
    data
  );
  return response.data;
};

export const uploadImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(
    "https://organic-food-dt19.onrender.com/api/image/upload",
    formData,
    { headers: { "Content-Type": "multipart/form-data" } }
  );
  return response.data.url;
};

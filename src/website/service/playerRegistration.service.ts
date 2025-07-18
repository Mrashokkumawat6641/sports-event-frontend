/** @format */

import axios from "axios";
import { VITE_API } from "../../constant/env";

export const registerPlayer = async (data: any): Promise<any> => {
  const response = await axios.post(
    `${VITE_API}/sports_Event/SportsRegistraion/registerPlayer`,
    data
  );
  return response.data;
};

export const uploadPlayerImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append("image", file);
  const response = await axios.post(`${VITE_API}{/image/upload`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data.url;
};

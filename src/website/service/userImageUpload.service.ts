/** @format */

import axios from "axios";
import { VITE_API } from "../../constant/env";

export const uploadUserProfileImage = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await axios.post(
      "https://organic-food-dt19.onrender.com/api/image/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data; // Should contain image URL or info
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

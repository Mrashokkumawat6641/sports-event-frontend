/** @format */

import axios from "axios";

export const updateUserProfilePhoto = async (
  userId: string,
  photoUrl: string
) => {
  // Adjust the endpoint and payload as per your backend
  return axios.put(`https://organic-food-dt19.onrender.com/api/image/upload`, {
    photoUrl,
  });
};

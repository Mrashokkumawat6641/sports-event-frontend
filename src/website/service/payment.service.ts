/** @format */

import axios from "axios";
import { VITE_API } from "../../constant/env";

export const createOrder = async () => {
  const res = await axios.post(`${VITE_API}/create-order`);
  return res.data;
};

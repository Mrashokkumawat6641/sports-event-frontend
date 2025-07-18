/** @format */

import axios from "axios";
import { VITE_API } from "../../constant/env";

export const createPaypalOrder = async () => {
  const res = await axios.post(
    `${VITE_API}/sports_Event/paypalRegistration/create-order`
  );
  return res.data;
};

export const capturePaypalOrder = async (orderID: string) => {
  const res = await axios.post(
    `${VITE_API}/sports_Event/paypalRegistration/capture-order/${orderID}`
  );
  return res.data; 
};

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

import axios from "axios";
import { handleError, handleSuccess } from "../components/utils";
const URL = "http://localhost:3000";
export const addUser = async (data) => {
  try {
    const res = await axios.post(`${URL}/add`, data);
    const msg = await res.data.message;
    if ((res.data.success = true)) {
      handleSuccess(msg);
    }
  } catch (error) {
    console.log("error while getting signup api", error);
    handleError(error.response.data.message);
  }
};

export const login = async (data) => {
  try {
    const res = await axios.post(`${URL}/login`, data);
    const msg = await res.data.message;
    console.log(msg);
    if (res.status === 201) {
      handleSuccess(msg);
    }
    return res;
  } catch (error) {
    console.log("error while getting login api", error);
    handleError(error.response.data.message);
  }
};

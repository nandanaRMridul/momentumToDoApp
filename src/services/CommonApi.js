import axios from "axios";
import { baseURL } from "./baseURL";

const CommonApi = async(reqMethod, reqEndPoint, reqBody) => {
  //create request config object
  const reqObj = {
    method: reqMethod,
    url: baseURL + reqEndPoint,
    data: reqBody
  }

  return await axios(reqObj).then((res) => {
  return res;
  }).catch ((err) => {
  return err;
  })
  
}

export default CommonApi
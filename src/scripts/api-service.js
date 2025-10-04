import axios from 'axios'
import Cookies from 'js-cookie'
import { checkRes } from './helper'

// axios.defaults.headers.post["Accept"] = "application/json";
const base_url = process.env.REACT_APP_BASE_URL

/* query ---> api url to query with
   no_token ---> acts as a flag for no need to use token */
export const getData = async (query, no_token) => {
  const token = Cookies.get('kotha_token')

  try {
    let data = await axios.get(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
          Authorization: token ? `Bearer ${token}` : null,
          // "lang": i18n?.language || 'en',
          // "responseType": "arraybuffer"
        },
    })

    // if (checkRes(data.status)) {
    return data?.data
    // }
  } catch (error) {
    // checkRes(error?.response?.status);
    // error.response?.data?.messages &&
    // typeof error.response?.data?.messages === "object"
    // ? error.response.data.messages.map((err) => {
    //     alertPop(error_status, err);
    //     })
    // : errorHandle(error);
    // return false;
  }
}

/* query ---> api url to query with
     data ---> data to be posted
     no_token ---> acts as a flag for no need to use token */

export const postData = async (
  query,
  data,
  no_token,
  showError,
  notShowAlert
) => {
  const token = Cookies.get('kotha_token')

  try {
    let res = await axios({
      method: 'post',
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
          Authorization: token ? `Bearer ${token}` : null,
          // "lang": i18n?.language || 'en',
          // "responseType": "arraybuffer"
        },
      data: data,
    })
    return res
  } catch (error) {
    console.log('error?.response?.data', error?.response)
    checkRes(error?.response?.status)
    if (error?.response?.data && Object.keys(error.response.data).length) {
      return {
        error: true,
        errors: error?.response?.data,
      }
    }
    return error.response.data
  }
}

export const deleteData = async (query, no_token) => {
  const token = Cookies.get('kotha_token')

  try {
    let data = await axios.delete(`${base_url}${query}`, {
      headers: no_token
        ? {}
        : {
          Authorization: `Bearer ${token}`,
        },
    })
    return data
    // if (checkRes(data.status)) {
    //     // setUserProfile();
    //     return data;
    // } else {
    //     toast.error(msg_undefined);
    // }
  } catch (error) {
    // checkRes(error?.response?.status);
    // error.response?.data?.messages &&
    // typeof error.response?.data?.messages === "object"
    // ? error.response.data.messages.map((err) => {
    //     alertPop(error_status, err);
    //     })
    // : errorHandle(error);
    // return false;
  }
}

export const putData = async (query, data, no_token, showError) => {
  const token = Cookies.get('kotha_token')

  try {
    let res = await axios({
      method: 'put',
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
          Authorization: `Bearer ${token}`,
          lang: 'en',
        },
      data: data,
    })
    return res
  } catch (error) {
    console.log('error?.response?.data', error?.response)

    if (error?.response?.data && Object.keys(error.response.data).length) {
      return {
        error: true,
        errors: error?.response?.data,
      }
    }
    return error.response
  }
}

export const patchData = async (query, data, no_token, showError) => {
  const token = Cookies.get('kotha_token')

  try {
    let res = await axios({
      method: 'patch',
      url: `${base_url}${query}`,
      headers: no_token
        ? {}
        : {
          Authorization: `Bearer ${token}`,
          lang: 'en',
        },
      data: data,
    })
    return res
  } catch (error) {
    console.log('error?.response?.data', error?.response)

    if (error?.response?.data && Object.keys(error.response.data).length) {
      return {
        error: true,
        errors: error?.response?.data,
      }
    }
    return error.response
  }
}
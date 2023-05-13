import axios from "axios";

//export const BASE_URL = "https://miagenda.iptegra.co:8020";

const host = new URL(`http://${window.location.host}`);

export const BASE_URL = host.port === '' ? `http://${window.location.host}:1017` : `http://${window.location.host.substring(0, window.location.host.length - 5)}:1017`;

const handleResponse = (response) => {
    const responseObj = {
      status: 500,
      success: false,
      error: null,
      data: null
    };

    if (response && response.status) {
      responseObj.status = response.status;
    } else if (response && response.response) {
      responseObj.status = response.response.status;
    }
    responseObj.success =
      responseObj.status === 200 || responseObj.status === 201;

    if (responseObj.status !== 200 && responseObj.status !== 201) {
      if (responseObj.status === 401) {
        console.log('Token invalido toca refrescar');
      }
      if (response) {
        if (response.response) {
          responseObj.error = response.response.data;
        } else if (response.message) {
          responseObj.error = response.message;
        } else if ( response.non_field_errors) {
          responseObj.error = response.non_field_errors[0];
        }
      }
    }

    responseObj.data =
      responseObj.status === 200 || responseObj.status === 201
        ? response.data || response.result
        : null;
    return responseObj;
  };


  export const get = async (resource, headers) => {
    return await axios
      .get(`${BASE_URL}/${resource}`, headers)
      .then(handleResponse)
      .catch(handleResponse);
  };

  export const post = async (resource, data, headers) => {
    return axios
      .post(`${BASE_URL}/${resource}`, data, headers)
      .then(handleResponse)
      .catch(handleResponse);
  };

  export const put = async (resource, data, headers) => {
    return await axios
      .put(`${BASE_URL}/${resource}`, data, headers)
      .then(handleResponse)
      .catch(handleResponse);
  };

  export const patch = async (resource, data, headers) => {
    return await axios
      .patch(`${BASE_URL}/${resource}`, data, headers)
      .then(handleResponse)
      .catch(handleResponse);
  };

  export const remove = async (resource, data, headers) => {
    return await axios
      .delete(`${BASE_URL}/${resource}`, data, headers)
      .then(handleResponse)
      .catch(handleResponse);
  };
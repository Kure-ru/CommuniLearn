import axios from "axios";
const baseUrl = "/api/users";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getUser = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const markRead = async (id, userId) => {
const response = await axios.put(`${baseUrl}/${id}/read`, { userId });
console.log(response.data)
return response.data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { getUser, create, update, setToken, markRead };

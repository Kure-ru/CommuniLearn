import axios from 'axios'
const baseUrl = 'http://localhost:2121/api/users'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token }
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data;
}

const update = (id, newObject) => {
    const request = axios.put(`${ baseUrl }/${id}`, newObject)
    console.log(request)
    return request.then(response => response.data)
  }
  

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, update }
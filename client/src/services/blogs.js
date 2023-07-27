import axios from 'axios'
const baseUrl = 'http://localhost:2121/api/blogs'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const get = (id) => {
    const request = axios.get(`${ baseUrl }/${id}`)
    return request.then(response => response.data)
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
    return request.then(response => response.data)
}

const deleteBlog = (id) => {
    const request = axios.delete(`${ baseUrl }/${id}`)
    return request.then(response => response.data)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default { get, getAll, create, update, setToken, deleteBlog }

import axios from 'axios'
const baseUrl = '/api/courses'


let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token }
    }
    console.log(config)
    const response = await axios.post(baseUrl, newObject, config)
    return response.data;
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const get = (id) => {
    const request = axios.get(`${ baseUrl }/${id}`)
    return request.then(response => response.data)
}

const deleteCourse= (id) => {
    const request = axios.delete(`${ baseUrl }/${id}`)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, setToken, getAll, get, deleteCourse }
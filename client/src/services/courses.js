import axios from 'axios'
const baseUrl = 'http://localhost:2121/api/courses'


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

// eslint-disable-next-line import/no-anonymous-default-export
export default { create, setToken }
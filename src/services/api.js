import axios from 'axios'

const requestHelper = axios.create({
  baseURL: 'http://localhost:4000/'
})

const routes = {
  user: {
    register: data => requestHelper({
      url: 'register',
      method: 'post',
      data
    }),
    login: data => requestHelper({
      url: 'login',
      method: 'post',
      data
    }),
    whoami: (token) => requestHelper({
      url: 'whoami',
      headers: {
        Authorization: 'Bearer ' + token
      },
      method: 'get'
    })
  }
}

export default routes
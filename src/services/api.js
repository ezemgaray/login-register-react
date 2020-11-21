import axios from 'axios'

const requestHelper = axios.create({
  baseURL: 'https://property-search-engine-api.herokuapp.com/'
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
    })
  }
}

export default routes
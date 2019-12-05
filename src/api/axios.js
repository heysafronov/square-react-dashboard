import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://square-dashboard-6ffae.firebaseio.com'
})

export default instance

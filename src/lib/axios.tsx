import axios from 'axios'

const BASE_URL = 'localhost:3000/'

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

const getUser = () => {
  return instance.get(`vertex`)
}

const getExercise = () => {
  return instance.get(`exercises`)
}

export { getUser, getExercise }

import axios from 'axios';

function getData(path){
  return axios.get(`${process.env.REACT_APP_API_URL}${path}`)
}

function postData(path, data){
  return axios.post(`${process.env.REACT_APP_API_URL}${path}`, data)
}

export {
  getData,
  postData
}
import axios from '@/request/http';

export const login = (data) => {
  return axios({
    url: '/apc-puplic/login',
    method: 'post',
    data
  });
};

export const getUserInfo = () => {
  return axios({
    url: '/userinfo',
    method: 'get'
  });
};

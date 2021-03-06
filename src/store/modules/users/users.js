import { login } from '@/api/login/login';
import { getToken, setToken } from '@/utils/auth';
const users = {
  namespaced: true,
  state: {
    token: getToken()
  },
  actions: {
    Login ({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(res => {
          if (res.code === 200) {
            setToken(res.data);
            commit('SET_TOKEN', res.data);
          }
          resolve();
        }).catch(err => {
          reject(err);
        });
      });
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    }
  }
};
export default users;

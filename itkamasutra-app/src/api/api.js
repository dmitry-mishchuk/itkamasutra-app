import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "8f3145b7-9486-427a-b604-f989e2114925"
  }
});




export const usersAPI = {

  getUsers(currentPage=1, pageSize=10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    .then(response => {
      return response.data;
    });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  }

}
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
}

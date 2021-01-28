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
    console.warn("Depricated method... Please use profaleAPI.getProfile(userId)");
    return profileAPI.getProfile(userId);
  }
}
export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(text){
    return instance.put(`profile/status/`, {
      status: text
    });
  }
}


export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
}

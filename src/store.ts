import Vue from "vue";
import Vuex, { Store } from "vuex";
import axios from "axios";
import querystring from "querystring";
import { UserInfo } from "@/interface/UserInfo";

Vue.use(Vuex);

const localUserInfo = localStorage.getItem("userInfo");

console.log(localUserInfo);

export default new Vuex.Store({
  state: {
    userInfo: localUserInfo ? JSON.parse(localUserInfo) : null
  },
  mutations: {
    getUserInfo(state, userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      state.userInfo = userInfo;
    },
    clearUserInfo(state) {
      localStorage.removeItem("userInfo");
      state.userInfo = null;
    }
  },
  actions: {
    getUserInfo: ({ commit, state }, accesstoken) => {
      axios
        .post(
          `https://cnodejs.org/api/v1/accesstoken?${querystring.stringify({
            accesstoken
          })}`
        )
        .then(response => {
          commit("getUserInfo", { ...response.data, token: accesstoken });
        });
    },
    clearUserInfo: ({ commit }) => commit("clearUserInfo")
  }
});

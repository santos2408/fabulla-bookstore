import { defineStore } from "pinia";

export const LOGIN_STATUS = "LOGIN_STATUS";
export const SET_LOGIN_STATUS = "SET_LOGIN_STATUS";
export const ON_MOBILE_STATUS = "ON_MOBILE_STATUS";
export const SET_ON_MOBILE_STATUS = "SET_MOBILE_STATUS";

export const useUserStore = defineStore("user", {
  state() {
    return {
      onMobile: false,
      isLogged: false,
    };
  },

  actions: {
    [SET_LOGIN_STATUS](status) {
      this.isLogged = status;
    },
    [SET_ON_MOBILE_STATUS](status) {
      this.onMobile = status;
    },
  },

  getters: {
    [LOGIN_STATUS](state) {
      return state.isLogged;
    },
    [ON_MOBILE_STATUS]() {
      return this.onMobile;
    },
  },
});

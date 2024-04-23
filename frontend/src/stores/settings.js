import { defineStore } from "pinia";

export const GET_SETTINGS = "GET_SETTINGS";

export const useSettingsStore = defineStore("settings", {
  state() {
    return {
      logo_default: "storytelling-logo.svg",
      logo_white: "favela-jobs-white-logo.svg",
    };
  },
  actions: {
    setSetting() {
      // this.onMobile = status;
    },
  },
  getters: {
    [GET_SETTINGS](state) {
      return state;
    },
  },
});

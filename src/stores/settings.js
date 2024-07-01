import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    fontSize: 16,
    themeColor: 'white',
    colors: ['white', 'lightgrey', 'lightblue', 'lightgreen', 'lavender']
  }),
  actions: {
    incrementFontSize() {
      this.fontSize++;
      document.body.style.fontSize = this.fontSize + 'px';
    },
    decrementFontSize() {
      this.fontSize--;
      document.body.style.fontSize = this.fontSize + 'px';
    },
    changeThemeColor(color) {
      this.themeColor = color;
      document.body.style.backgroundColor = color;
    }
  }
});

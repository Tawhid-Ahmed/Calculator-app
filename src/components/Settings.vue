<template>
  <div class="settings">
    <div>
      <button @click="incrementFontSize">Increase Font Size</button>
      <button @click="decrementFontSize">Decrease Font Size</button>
    </div>
    <div class="theme-color-selector">
      <label for="theme-color">Choose Theme Color:</label>
      <select id="theme-color" v-model="selectedColor" @change="changeThemeColor">
        <option v-for="color in colors" :value="color" :key="color">{{ color }}</option>
      </select>
    </div>
  </div>
</template>

<script>
import { useSettingsStore } from '@/stores/settings';
import { computed } from 'vue';

export default {
  setup() {
    const settingsStore = useSettingsStore();
    const selectedColor = computed(() => settingsStore.themeColor);
    const colors = computed(() => settingsStore.colors);

    const incrementFontSize = () => {
      settingsStore.incrementFontSize();
    };

    const decrementFontSize = () => {
      settingsStore.decrementFontSize();
    };

    const changeThemeColor = (event) => {
      settingsStore.changeThemeColor(event.target.value);
    };

    return {
      selectedColor,
      colors,
      incrementFontSize,
      decrementFontSize,
      changeThemeColor
    };
  }
};
</script>

<style scoped>
.settings {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid #c7c2c2;
  border-radius: 10px;
}
.settings button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background: #ffA500;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.settings button:hover {
  background: #e69500;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}

.theme-color-selector {
  width: 250px;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
}

.theme-color-selector label {
  display: block;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.theme-color-selector select {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  background-color: #fff;
  color: #333;
  transition: border-color 0.3s ease;
}

.theme-color-selector select:focus {
  border-color: #007BFF;
  outline: none;
}
</style>

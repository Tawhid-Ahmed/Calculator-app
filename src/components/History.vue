<template>
  <div class="history">
    <ul>
      <li v-for="(item, index) in history" :key="index">{{ item }}</li>
    </ul>
    <button @click="resetHistory" class="reset-button">Reset History</button>
  </div>
</template>

<script>
import { useCalculatorStore } from '@/stores/calculator';
import { computed } from 'vue';

export default {
  setup() {
    const calculatorStore = useCalculatorStore();
    const history = computed(() => calculatorStore.history);

    const resetHistory = () => {
      calculatorStore.resetHistory();
    };

    return {
      history,
      resetHistory
    };
  }
};
</script>

<style scoped>
.history {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid #646262;
  border-radius: 10px;
}

.history ul {
  list-style-type: none;
  padding: 0;
}

.history ul li {
  margin-bottom: 10px;
  font-size: 18px;
}

.reset-button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #ffA500; 
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease; 
}

.reset-button:hover {
  background-color: #e69500; 
}
</style>

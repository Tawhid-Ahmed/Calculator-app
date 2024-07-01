<template>
  <div class="calculator">
    <div class="display">{{ display }}</div>
    <div class="buttons">
      <button v-for="button in buttons" :key="button" @click="handleClick(button)">
        {{ button }}
      </button>
    </div>
  </div>
</template>

<script>
import { useCalculatorStore } from '@/stores/calculator';
import { computed } from 'vue';

export default {
  setup() {
    const calculatorStore = useCalculatorStore();
    const display = computed(() => calculatorStore.display);

    const handleClick = (button) => {
      if (button === 'C') {
        calculatorStore.clearDisplay();
      } else if (button === 'AC') {
        calculatorStore.resetDisplay();
      } else if (button === '=') {
        calculatorStore.evaluateExpression();
      } else if (button === '%') {
        calculatorStore.calculatePercentage();
      }else {
        calculatorStore.addToDisplay(button);
      }
    };

    return {
      display,
      buttons: ['AC','C','%','*','7', '8', '9','/','4', '5', '6','-','1', '2', '3','+','0', '.', '='],
       
      handleClick
    };
  }
};
</script>

<style scoped>
.calculator {
  width: 300px;
 
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  margin: 10px 0;
  border: 2px solid #b7b5b5;
  text-align: right;
  border-radius: 5px;
  padding: 10px;
  font-size: 24px;
  box-sizing: border-box;
 
}

.buttons {
  display: grid;

  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.buttons button {
 
  width: 100%;
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 3px;
}
.buttons button:nth-child(17) {
  grid-column: span 2;
}
 
.buttons button:nth-child(-n+4) {
  grid-column: span 1; 
  background-color: #ffA500; 
  color: white;
}

 
.buttons button:nth-child(4n + 4) {
  grid-column: 4; 
  background-color: #ffA500; 
  color: white;
}


 
</style> 


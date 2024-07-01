import { defineStore } from 'pinia';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    display: '',
    history: [] 
  }),
  actions: {
    addToDisplay(value) {
 
      if (value === '.' && this.display.slice(-1) === '.') {
        return; 
      }

 
      if (value === '.') {
        const parts = this.display.split(/[-+*/]/);
        const currentSegment = parts[parts.length - 1];
        if (currentSegment.includes('.')) {
          return; 
        }
      }

      this.display += value;
    },
    clearDisplay() {
      this.display = this.display.slice(0, -1);
    },
    resetDisplay() {
      this.display = '';
    },
    calculatePercentage() { 
      const num = parseFloat(this.display);
      if (!isNaN(num)) {
        const percentage = (num / 100).toString();
        this.history.push(`${num}% = ${percentage}`);
        this.display = percentage;
      }
    },
    evaluateExpression() {
      try {
 
        const result = eval(this.display).toString();
        this.history.push(`${this.display} = ${result}`);
        this.display = result;
      } catch (e) {
        this.display = 'Error';
      }
    },
    resetHistory() {
      this.history = [];
    },
 
  }
});

import { defineStore } from 'pinia';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    display: '0',
    history: [],
    lastActionWasEvaluation: false 
  }),
  actions: {
    addToDisplay(value) {
      if (this.lastActionWasEvaluation) {
        this.display = ''; 
        this.lastActionWasEvaluation = false; 
      }

 
      if (this.display === '0' && value !== '.') {
        this.display = value; 
        return;
      }

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
      this.display = this.display.length > 1 ? this.display.slice(0, -1) : '0';
    },
    resetDisplay() {
      this.display = '0';
    },
    calculatePercentage() {
      const num = parseFloat(this.display);
      if (!isNaN(num)) {
        const percentage = (num / 100).toString();
        this.history.push(`${num}% = ${percentage}`);
        this.display = percentage;
        this.lastActionWasEvaluation = true;  
      }
    },
    evaluateExpression() {
      try {
        const result = eval(this.display).toString();
        this.history.push(`${this.display} = ${result}`);
        this.display = result;
        this.lastActionWasEvaluation = true;  
      } catch (e) {
        this.display = 'Error';
        this.lastActionWasEvaluation = true; 
      }
    },
    resetHistory() {
      this.history = [];
    },
  }
});

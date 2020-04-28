import {observable, action} from 'mobx';
class CounterStore {
  @observable betslipCount = 0;
  @action increment() { 
    this.betslipCount++;
  }
  @action decrement() { 
    this.betslipCount--;
  }
  @action clearAll() {
    this.betslipCount = 0
  }
}
export default new CounterStore();
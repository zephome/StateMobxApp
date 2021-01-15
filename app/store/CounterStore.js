import {decorate, makeObservable, observable, action} from 'mobx';

class CounterStore {
  @observable counter = [
    {
      counterNum: 0,
    },
  ];

  constructor() {
    makeObservable(this);
  }

  // Add Counter
  @action
  handleAddCounter = () => {
    this.counter.push({
      counterNum: 0,
    });
  };

  // Remove Counter
  @action
  handleRemoveCounter = () => {
    this.counter.pop();
  };

  // Increment CounterNum
  @action
  handleIncrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum + 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };

  // Decrement CounterNum
  @action
  handleDecrement = ({index}) => {
    this.counter = [
      ...this.counter.slice(0, index),
      {
        counterNum: this.counter[index].counterNum - 1,
      },
      ...this.counter.slice(index + 1, this.counter.length),
    ];
  };
}

// decorate(CounterStore, {
//   counter: observable,
//   handleAddCounter: action,
//   handleRemoveCounter: action,
//   handleIncrement: action,
//   handleDecrement: action,
// });

export default new CounterStore();

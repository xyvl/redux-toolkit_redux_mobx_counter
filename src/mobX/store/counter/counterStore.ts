import { observable, action, makeObservable } from 'mobx';

class Counter{
  count = 0;

  constructor() {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
    });
  } 

  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
};

export const counter = new Counter()

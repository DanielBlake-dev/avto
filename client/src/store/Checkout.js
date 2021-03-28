import { action, observable, makeObservable } from "mobx";

export class CheckoutStore {
  total = 0;
  recources = [];

  constructor() {
    makeObservable(this, {
      total: observable,
      select: action("select recource"),
      remove: action("remove recource"),
      changeCount: action("change recource"),
    });
  }

  changeTotal() {
    this.total = this.recources.reduce((acc, recource) => {
      return acc + recource.price * recource.count;
    }, 0);
  }

  remove(recource) {
    this.recources = this.recources.filter((r) => r._id !== recource._id);
    this.changeTotal();
  }

  changeCount(recources, count = 1) {
    this.recources = this.recources.map((r) => {
      if (r._id !== recources._id) {
        return r;
      }

      return {
        ...r,
        count,
        total: r.price * count,
      };
    });

    this.changeTotal();
  }

  select(recource) {
    this.recources.push(recource);
  }

  setTotal(total = 0) {
    this.total = total;
  }

  getTotal() {
    return this.total;
  }

  getRecources() {
    return this.recources;
  }
}

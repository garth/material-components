import { expect as chai } from 'chai';

let expected = null;
let actual = 0;

export default {

  expect(target) {
    actual++;
    return chai(target);
  },

  expectCount(count) {
    expected = count;
  },

  reset() {
    expected = null;
    actual = 0;
  },

  check() {
    if (this.currentTest.state === 'failed' || expected === null || expected === actual) { return; }
    let err = new Error(`expected ${expected} assertions, got ${actual}`);
    this.currentTest.emit('error', err);
  }
}

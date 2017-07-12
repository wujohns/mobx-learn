/**
 * mobx 基础功能
 *
 * @author wujohns
 * @date 17/7/12
 */
const mobx = require('mobx');
observable = mobx.observable,
computed = mobx.computed,
autorun = mobx.autorun;

const numbers = observable([1, 2, 3]);
const sum = computed(() => numbers.reduce((a, b) => a + b, 0));

const disposer1 = autorun(() => console.log(`sum: ${ sum.get() }`));
const disposer2 = autorun(() => console.log(`length: ${ numbers.length }`));

numbers.push(4);
numbers.push(5);
numbers.push(6);
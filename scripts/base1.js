/**
 * mobx 基础功能
 *
 * @author wujohns
 * @date 17/7/12
 */
import { observable, computed, autorun } from 'mobx';

// 会触发 autorun 的场景
const numbers = observable([1, 2, 3]);
const sum = computed(() => {
    console.log('compute the sum of numbers');
    return numbers.reduce((a, b) => a + b, 0);
});

const disposer1 = autorun(() => console.log(`sum: ${ sum.get() }`));
const disposer2 = autorun(() => console.log(`length: ${ numbers.length }`));

// 不会触发 autorun 的场景（只会在第一次时触发）
const staticNums = observable([1, 2, 3]);
const staticSum = computed(() => {
    console.log('static sum');
    return staticNums.reduce((a, b) => a + b, 0);
});

const disposer3 = autorun(() => console.log(`staticSum: ${ staticSum.get() }`));
const disposer4 = autorun(() => console.log(`staticlength: ${ staticNums.length }`));

numbers.push(4);
numbers.push(5);
numbers.push(6);
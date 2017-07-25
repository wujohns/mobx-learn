/**
 * 临时测试，之后移除
 */
'use strict';

import { observable, computed, autorun } from 'mobx';

let number = [1, 2, 3];
@observable number;

const sum = computed(() => numbers.reduce((a, b) => a + b, 0));
autorun(() => console.log(`sum: ${ sum.get() }`));

numbers.push(4);
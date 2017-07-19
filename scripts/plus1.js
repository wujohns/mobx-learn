/**
 * docorator 使用案例
 *
 * @author wujohns
 * @date 17/7/18
 */
'use strict';

// 对类的修饰（给类增加一个静态属性）------------------------------------
const addStatic = (target) => {
    target.staticValue = '-------- staicValue ---------';
};

@addStatic
class Test1 {}
console.log(Test1.staticValue);

// 对类的修饰（给类增加一个静态属性）------------------------------------
const addCusStatic = (key, value) => (target) => {
    target[key] = value;
};

@addCusStatic('staticValue', '-------- cusStaicValue ---------')
class Test2 {}
console.log(Test2.staticValue);

// 对类属性的修饰（给属性增加 readonly 特性）----------------------------
/**
 * 
 */
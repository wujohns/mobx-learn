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
 * readonly 修饰器
 * @param {Object} target - 所修饰的目标对象
 * @param {String} name - 所修饰的属性名
 * @param {Object} descriptor - 该属性的描述对象
 */
const readonly = (target, name, descriptor) => {
    // descriptor 的默认值
    // 具体可参考JS属性特性相关：https://segmentfault.com/a/1190000007290020
    // {
    //     value: specifiedFunction,
    //     enumerable: false,
    //     configurable: true,
    //     writable: true
    // }
    descriptor.writable = false;
    return descriptor;
};

class Test3 {
    @readonly
    name () { return 'The Name!!!' }
}

try {
    const t3 = new Test3();
    t3.name = 'aaa';
} catch (err) {
    console.log(err.message);
}
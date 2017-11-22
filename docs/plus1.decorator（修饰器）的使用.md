# decorator(修饰器)的使用
修饰器是ES7中的新特性，可对类及其属性做修饰，在mobx中采用修饰器的语法特性能使代码
更为简洁明了。

## 修饰语法转换
当使用下述修饰器做法时：  
```javascript
@decorator
class A {}
```

等同于：  
```javascript
class A {}
A = decorator(A) || A;
```

## 对类的修饰
```javascript
@decorator
class A {}
```

等同于：  
```javascript
class A {}
A = decorator(A) || A;
```

其中 `decorator` 为以下格式：
```javascript
const decorator = (target) => {...}
```

## 对类属性的修饰
```javascript
/**
 * readonly 修饰器
 * @param {Object} target - 所修饰的目标对象 Test3.prototype
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
```

添加修饰符的作用和一下操作相同：
```
Object.defineProperty(Test3.prototype, 'name', { writable: false });
```

详细参考代码：[scripts/plus1.js](/scripts/plus1.js)
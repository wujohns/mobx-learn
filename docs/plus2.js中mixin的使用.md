# js中mixin的使用
## 相关概念
**多重继承**：多重继承是指一个子类同时继承多个父类（为了同时拥有多个父类的特性）  
**mixin**：一种特殊的多重继承。形式为取一个类作为主类，将其他的特性混入到这个主类中，
从而实现对主类的增强（混入的特性也可以按照功能点进行分组，方便管理），子类则继承这个
增强后的主类。  

由于js灵活的语法特性，在js中并没有 `mixin` 的范式。这里主要对js的 `mixin` 的相关方法
进行探究，并规定其范式。  

[参考文章地址](http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/)  

## mixin的分类
为了方便后续的理解，这里将mixin分为两类：
**mixin definition**：可以混入到多个父类中的 `mixin`。直观点可以理解为子类的工厂方法
**mixin application**：只能混入到一个父类中的 `mixin`。直观点就是和子类类似，但是可以同时
混入其他的mixin

本文主要考虑 `mixin application` 这种形式。

## mixin的范式
`dart` 中 `mixin` 的格式为：
```dart
class B extends A with M1, M2 {

}
```

与之类似我们可以在 js 中构建相应的父类工厂方法 `mix`，实现如下格式的 `mixin`：
```javascript
class B extends mix(A).with(M1, M2) {}
```
## mixin的具体实现
上述 `mix` 的实现如下：  
```javascript
const mix = (superclass) => new MixinBuilder(superclass);
class MixinBuilder {
    constructor (superclass) {
        this.superclass = superclass;
    }

    with (...mixins) {
        return mixins.reduce((c, mixin) => mixin(c), this.superclass);
    }
}
```

其中需要注意的是 `mixin` 格式如下：
```javascript
const M1 = (superclass) => class extends superclass {
    foo () {
        console.log('M1');
    }
};
```

容易理解一点的格式：
```javascript
const M1 = (superclass) => {
    class M1Class extends superclass {
        foo () {
            console.log('M1');
        }
    }
    return M1Class;
}
```

本质上是一层层继承实现对父类的增强。

## 额外参考
另外有一种常用的非上述范式的 `mixin` 实现：
```javascript
const mix = (superclass, mixin) => {
    for (let key in mixin) {
        if (superclass.prototype.hasOwnProperty(key)) {
            continue;
        }
        superclass.prototype[key] = mixin[key];
    }
}

const M1 = {
    // 由于foo可能会被整合到superclass.prototype中，所以这里只能用function, 不能使用箭头函数
    foo: function {
        console.log('M1');
    }
};
```

相比于范式的 `mixin`，这里的实现只能整合父类缺失的属性，功能较弱但简单易懂。
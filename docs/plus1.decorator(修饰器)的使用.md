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


# mobx 笔记  

在较复杂的单页应用中，为了方便对前端状态的管理，除了使用 redux 作为状态管理外，还
有 mobx 这个选项。这里主要对 mobx 的使用以及接口做相关的实验。  

由于 mobx 中最佳的使用依赖于ES7的修饰器这种语法特性，这里的案例实验也都是剥离 `dom` 的，为了
能直接在命令行下调试，这是使用 `babel-node` 运行相应的脚本。  

## 环境的准备
安装 `babel-cli` 工具：`npm install -g babel-cli`  
安装该案例项目依赖的包 `npm install`  

## 测试代码运行
使用 `babel-node` 即可直接运行 `scripts` 目录下的案例代码，ex: `babel-node scripts/base1.js`  

## 目录
1. [mobx的基础使用](/docs/1.mobx的基础使用.md)  
1. [mobx与decorator配合使用](/docs/2.mobx与decorator配合使用.md)  
1. [mobx在实际工程的范式总结](/docs/3.mobx在实际工程的范式总结.md)  

## 补充
[plus1.decorator(修饰器)的使用](/docs/plus1.decorator(修饰器)的使用.md)  

## 相关参考
[Decorator相关使用](http://es6.ruanyifeng.com/#docs/decorator)  
[React全家桶又填新成员 MobX入坑指南(1)](http://brooch.me/2016/11/23/MobX-simple-entry-1/)  
[MobX中@computed和自定义get函数的区别](http://blog.csdn.net/cqm1994617/article/details/53271494)  
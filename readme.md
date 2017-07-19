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

## 相关参考
[Decorator相关使用](http://es6.ruanyifeng.com/#docs/decorator)
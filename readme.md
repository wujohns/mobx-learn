# mobx 笔记  

在较复杂的单页应用中，为了方便对前端状态的管理，除了使用 redux 作为状态管理外，还
有 mobx 这个选项。这里主要对 mobx 的使用以及接口做相关的实验。

由于 mobx 中最佳的使用依赖于ES7的修饰器这种语法特性，所以这里使用 babel 以保证其可
以在 node 6.x 下运行。

## 环境的准备
安装 `babel-cli` 工具：`npm install -g babel-cli`


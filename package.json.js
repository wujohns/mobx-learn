/**
 * module bundler with simple configure
 */
'use strict';

const packageConfig = {
    // 基础说明配置
    name: 'redux-learn',
    version: '0.0.1',
    author: 'wujohns',
    description: 'learn redux',
    license: 'MIT',

    /**
     * scripts
     */
    scripts: {
        // test: './node_modules/mocha/bin/mocha ./test/build.test.js'
    },

    engine: {
        node: '>=4.0.0'
    },

    dependencies: {
        // 基础工具
        'lodash': '^4.17.4',
        'async': '^2.4.1',      // 目前代码中并未出现，之后考虑移除

        // redux 相关
        'mobx': '^3.2.1'
    },

    devDependencies: {
        // babel 依赖的包
        'babel-preset-es2015': '^6.24.1',
        'babel-preset-stage-2': '^6.24.1',
        'babel-plugin-transform-decorators-legacy': '^1.3.4'
    }
};

const fs = require('fs');
const path = require('path');
const targetFile = path.join(__dirname, './package.json');
fs.writeFileSync(targetFile, JSON.stringify(packageConfig, null, 2), {
    encoding: 'utf8',
    flags: 'w',
    mode: 0o666
});
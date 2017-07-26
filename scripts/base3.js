/**
 * mobx 在实际工程中的范式总结
 *
 * @author wujohns
 * @date 17/7/25
 */
'use strict';

import {
    observable, computed, autorun,
    userStrict, action
} from 'mobx';

/**
 * 用户状态信息存储对象
 */
class UserStore {
    @observable username;
    @observable nickname;
    @observable email;

    /**
     * 用户信息状态初始化
     */
    constructor (userInfo) {
        this.username = userInfo.username;
        this.nickname = userInfo.nickname;
        this.email = userInfo.email;
    }
}

/**
 * 页面状态信息存储对象
 */
class PageStore {
    @observable title;
    @observable subTitle;

    /**
     * 页面状态信息初始化
     */
    constructor (pageInfo) {
        this.title = pageInfo.title;
        this.subTitle = pageInfo.subTitle;
    }
}

/**
 * 单页应用中的全局状态变量
 */
class Store {
    @observable userInfo;
    @observable pageInfo;

    /**
     * 全局状态的初始化（类似与reducer的组装工作）
     */
    constructor (props) {
        this.userInfo = new UserStore(props.userInfo);
        this.pageInfo = new PageStore(props.pageInfo);
    }
}

const store = new Store({
    userInfo: {
        username: '',
        nickname: '',
        email: ''
    },
    pageInfo: {
        title: 'index',
        subTitle: 'sub'
    }
});


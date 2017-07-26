/**
 * 全局信息状态存储对象
 *
 * @author wujohns
 * @date 17/7/26
 */
'use strict';

import { useStrict, observable } from 'mobx';

import UserStore from './user_store';
import PageStore from './page_store';

useStrict(true);

/**
 * 全局状态对象
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

export default store;
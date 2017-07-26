/**
 * 用户信息状态存储对象
 *
 * @author wujohns
 * @date 17/7/26
 */
'use strict';

import { observable } from 'mobx';

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

export default UserStore;
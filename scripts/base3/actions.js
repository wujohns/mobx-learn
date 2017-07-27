/**
 * 自定义的 action
 *
 * @author wujohns
 * @date 17/7/26
 */
'use strict';

import { useStrict, action, runInAction } from 'mobx';

import store from './store';

/**
 * actions 操作
 * @static
 */
class Actions {
    /**
     * 修改用户名（同步）
     * @param {String} username - 用户名 
     */
    @action('change username') static changeUsername (username) {
        store.userInfo.username = username;
    }

    /**
     * 修改 page title（异步）
     * @param {String} title - 标题
     * @param {Function} callback - 回调
     */
    static changeTitle (title, callback) {
        setTimeout(() => {
            runInAction('change title', () => {
                store.pageInfo.title = title;
                return callback();
            });
        }, 2000);
    }
}

export default Actions;
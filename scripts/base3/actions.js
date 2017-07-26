/**
 * 自定义的 action
 *
 * @author wujohns
 * @date 17/7/26
 */
'use strict';

import { useStrict, action } from 'mobx';

import store from './store';

/**
 * actions 操作
 * @static
 */
class Actions {
    static changeUsername = action('change username', (newUsername) => {
        store.userInfo.username = newUsername
    });
}

export default Actions;
/**
 * 用于测试的部分
 *
 * @author wujohns
 * @date 17/7/26
 */
'use strict';

import { useStrict, autorun } from 'mobx';

import store from './store';
import actions from './actions';

autorun(() => console.log(store.userInfo.username));
autorun(() => console.log(store.pageInfo.title));

actions.changeUsername('wujohns');
actions.changeTitle('page title', () => console.log('after change page title'));
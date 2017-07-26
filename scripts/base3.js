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
 * 单页应用中的全局状态变量
 */
class Store {
    @observable 
}
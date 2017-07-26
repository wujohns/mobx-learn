/**
 * 页面信息状态存储对象
 *
 * @author wujohns
 * @date 17/7/26
 */
'use strict';

import { observable, computed } from 'mobx';

/**
 * 页面信息状态存储对象
 */
class PageStore {
    @observable title;
    @observable subTitle;

    @computed get content () {
        return `${ this.title }-${ this.subTitle }`;
    }

    /**
     * 页面状态信息初始化
     */
    constructor (pageInfo) {
        this.title = pageInfo.title;
        this.subTitle = pageInfo.subTitle;
    }
}

export default PageStore;
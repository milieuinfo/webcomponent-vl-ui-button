const { VlElement } = require('vl-ui-core');

class VlIcon extends VlElement {
    constructor(driver, selector) {
        super(driver, selector);
    }

    get _iconPrefix() {
        return 'vl-vi-';
    }

    async getIcon() {
        const classList = await this.getClassList();
        return classList.find((clazz) => {
            return clazz.includes(this._iconPrefix);
        }).substring(this._iconPrefix.length);
    }

    async isBefore() {
        return this.hasAttribute('before');
    }

    async isAfter() {
        return this.hasAttribute('after');
    }
}

module.exports = VlIcon;

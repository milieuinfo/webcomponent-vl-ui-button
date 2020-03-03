const { VlElement } = require('vl-ui-core').Test;
const { VlIcon } = require('vl-ui-icon').Test;
const { VlInputAddon } = require('vl-ui-input-addon').Test;

class VlButtonElement extends VlElement {  

    async getIcon() {
        return new VlIcon(this.driver, this.selector + ' [is="vl-icon"]');
    }

    async isError() {
        return this.hasAttribute('error');
    }

    async isBlock() {
        return this.hasAttribute('block');
    }

    async isLarge() {
        return this.hasAttribute('large');
    }

    async isWide() {
        return this.hasAttribute('wide');
    }

    async isNarrow() {
        return this.hasAttribute('narrow');
    }

    async isLoading() {
        return this.hasAttribute('loading');
    }

    async isSecondary() {
        return this.hasAttribute('secondary');
    }

    async isTertiary() {
        return this.hasAttribute('tertiary');
    }

    async hasIcon() {
        try {
            await this.getIcon();
            return true;
        } catch(e) {
            return false;
        }
    }
}

class VlButton extends VlButtonElement  { }

class VlLinkButton extends VlButtonElement { } 

class VlButtonPill extends VlButtonElement {

    async getPillType() {
        return this.getAttribute('data-vl-type');
    }

    async isSuccessPill() {
        return (await this.getPillType()) === 'success';
    }

    async isWarningPill() {
        return (await this.getPillType()) === 'warning';
    }

    async isErrorPill() {
        return (await this.getPillType()) === 'error';
    }

}

class VlButtonInputAddon extends VlInputAddon {

    async getIcon() {
        return new VlIcon(this.driver, this.selector + ' [is="vl-icon"]');
    }
 }

module.exports = { 
    VlButton, 
    VlLinkButton,
    VlButtonPill,
    VlButtonInputAddon
};

import { VlElement } from '/node_modules/vl-ui-core/vl-core.js';

(() => {
    const id = 'vl-button-style';
    addStyle();

    function addStyle() {
        if (!document.head.querySelector('#' + id)) {
            var style = getStyle();
            document.head.appendChild(style);
        }
    }

    function getStyle() {
        var link = document.createElement('link');
        link.setAttribute('id', id);
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('type', 'text/css');
        link.setAttribute('href', '../style.css');
        return link;
    }
})();

/**
 * `vl-button``
 * Gebruik de vl-button om een ​​call-to-action toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram.
 * 
 * @demo demo/vl-button.html
 */
export class VlButton extends VlElement(HTMLButtonElement) {
    static get _observedAttributes() {
        return [];
    }

    static get _observedClassAttributes() {
        return ['disabled', 'error', 'block', 'large', 'wide', 'narrow', 'secondary', 'tertiary', 'loading'];
    }

    connectedCallback() {
        this.classList.add('vl-button');
    }

    get _classPrefix() {
        return 'vl-button--';
    }
}

customElements.define('vl-button', VlButton, {extends: 'button'});
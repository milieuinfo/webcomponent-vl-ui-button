import { NativeVlElement } from '/node_modules/vl-ui-core/vl-core.js';

/**
 * `vl-button``
 * Gebruik de vl-button om een ​​call-to-action toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram.
 * 
 * @demo demo/vl-button.html
 */
export class VlButton extends NativeVlElement(HTMLButtonElement) {
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
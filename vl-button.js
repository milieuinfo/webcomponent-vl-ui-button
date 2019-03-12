/**
 * `vl-button``
 * Gebruik de vl-button om een ​​call-to-action toe te voegen. Het type call-to-action wordt bepaald door het label of de pictogram.
 * 
 * @demo demo/vl-button.html
 */
class VlButton extends HTMLButtonElement {
    static get attributes() {
        return ['disabled', 'error', 'block', 'large', 'wide', 'narrow', 'secondary', 'tertiary'];
    }

    static get observedAttributes() {
        return VlButton.attributes;
    }

    connectedCallback() {
        this.classList.add('vl-button');
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal != newVal) {
            VlButton.attributes.filter(attribute => {
                return attribute == attrName;
            }).forEach(attribute => {
                if (this.getAttribute(attribute) != null) {
                    this.classList.add('vl-button--' + attribute);
                } else {
                    this.classList.remove('vl-button--' + attribute);
                }
            });
        }
    }
}

customElements.define('vl-button', VlButton, {extends: 'button'});
import { html } from 'lit-html';
import '../vl-button.js';
import '../style.css';

export default {
  title: 'Components/LinkButton',
  args: {
    text: 'Link Button',
    loading: false,
    disabled: false,
    error: false,
    block: false,
    large: false,
    wide: false,
    narrow: false,
    secondary: false,
    tertiary: false,
  },
};

export const Default = ({ text, disabled, error, block, large, wide, narrow, loading, secondary, tertiary }) =>
  html`<a
    is="vl-link-button"
    href="/"
    ?disabled=${disabled}
    ?data-vl-error=${error}
    ?data-vl-block=${block}
    ?data-vl-large=${large}
    ?data-vl-wide=${wide}
    ?data-vl-narrow=${narrow}
    ?data-vl-loading=${loading}
    ?data-vl-secondary=${secondary}
    ?data-vl-tertiary=${tertiary}
  >
    ${text}
  </a>`;

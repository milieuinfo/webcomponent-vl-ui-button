(()=>{function t(){var t=document.createElement("link");return t.setAttribute("id",e),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css"),t.setAttribute("href","https://cdn.milieuinfo.be/webcomponent-vl-ui-button/0.0.1/style.css"),t}const e="vl-button-style";!function(){if(!document.head.querySelector("#"+e)){var n=t();document.head.appendChild(n)}}();class n extends HTMLButtonElement{static get attributes(){return["disabled","error","block","large","wide","narrow","secondary","tertiary"]}static get observedAttributes(){return n.attributes}connectedCallback(){this.classList.add("vl-button")}attributeChangedCallback(t,e,r){e!=r&&n.attributes.filter(e=>{return e==t}).forEach(t=>{null!=this.getAttribute(t)?this.classList.add("vl-button--"+t):this.classList.remove("vl-button--"+t)})}}customElements.define("vl-button",n,{extends:"button"})})();
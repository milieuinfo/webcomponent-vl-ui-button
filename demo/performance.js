const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');

JSDOM.fromFile("vl-button.html").then(dom => {
    const scripts = [];
    dom.window.document.querySelectorAll('script[type="module"]').forEach(s => scripts.push(s.outerHTML));

    const stylesheets = [];
    dom.window.document.querySelectorAll('link[rel="stylesheet"]').forEach(s => stylesheets.push(s.outerHTML));

    const demo = dom.window.document.querySelectorAll('.demo')[0].outerHTML;

    const html = `<html><head>${scripts.join('')}${stylesheets.join('')}</head><body>${demo}</body></html>`;

    fs.writeFileSync('performance.html', html, 'utf8', (err) => {
        if (err) throw err;
    })
});

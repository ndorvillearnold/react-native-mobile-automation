// Page.js
const { browser } = require('@wdio/globals');

module.exports = class Page {
    open(path = '') {
        const url = `https://the-internet.herokuapp.com/${path}`;
        console.log(`Opening URL: ${url}`);
        return browser.url(url);
    }
};

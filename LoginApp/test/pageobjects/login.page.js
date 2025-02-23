// LoginPage.js
const Page = require('./Page');

class LoginPage extends Page {
    open() {
        return super.open('login');  // Opens "https://the-internet.herokuapp.com/login"
    }
}

module.exports = new LoginPage();

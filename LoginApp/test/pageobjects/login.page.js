// LoginPage.js
const LoginPage = require('../pageobjects/LoginPage');  // ✅ Correct


class LoginPage extends Page {
    open() {
        return super.open('login');  // Opens "https://the-internet.herokuapp.com/login"
    }
}

module.exports = new LoginPage();

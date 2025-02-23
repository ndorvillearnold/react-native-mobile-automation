// loginTest.js
const LoginPage = require('../pageobjects/LoginPage');

describe('Login Page Test', () => {
    it('should open the login page', async () => {
        await LoginPage.open();
        await browser.pause(3000); // Pause to see if the page opens
    });
});

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname,'../index.html' ), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    describe('head', () => {
        test('it has a title', () => {
            const head = document.querySelector('head')
            expect(head).toBeTruthy();
        });
    });

    describe('header', () => {
        test('header exists', () => {
            expect(document.getElementById('welcome')).toBeTruthy();
        })
    })

    test('it has a header tile', () => {
        let header = document.getElementById('welcome');
        expect(header.textContent).toContain('Welcome to your Profile!');
    })

    test('it has a nav bar', ()=> {
        let navBar = document.getElementById('hidden-userpage-nav');
        expect(navBar).toBeTruthy();
    })

    test('it has a log in button', ()=> {
        let loginButton = document.getElementById('loginButton');
        expect(loginButton).toBeTruthy();
    })

    test('it has a textbox input for email address', ()=> {
        let emailTextBox = document.getElementById('newEmail');
        expect(emailTextBox).toBeTruthy();
    })

})
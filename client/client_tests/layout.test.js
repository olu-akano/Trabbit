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
            expect(document.getElementById('welcomeHeading')).toBeTruthy();
        })
    })

    test('it has a header tile', () => {
        let header = document.getElementById('welcomeHeading');
        expect(header.textContent).toContain('welcome to...');
    })

    test('it has a sign up button', ()=> {
        let signupBtn = document.getElementById('signupButton');
        expect(signupBtn).toBeTruthy();
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
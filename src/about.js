import { generateHomePage } from "./pageLoad"
import { generateMenu } from "./menu";
export function generateAboutUs() {
    const content = document.querySelector('#content')
    content.innerHTML = '';
    const header = document.createElement('h1')
    header.textContent = 'Contact Us'
    const email = document.createElement('h3')
    email.textContent = 'thezahbrahs@pizza.net'
    const phoneNumber = document.createElement('h3')
    phoneNumber.textContent = '(123) 456-7890'


    const homeButton = document.createElement('button');
    homeButton.textContent = 'Home'
    const menuButton = document.createElement('button');
    menuButton.textContent = 'Menu';

    content.append(header, email, phoneNumber, homeButton, menuButton);

    homeButton.addEventListener('click', generateHomePage)
    menuButton.addEventListener('click', generateMenu)

}
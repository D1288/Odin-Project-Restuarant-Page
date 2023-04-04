import { generateHomePage } from "./pageLoad";
import { generateMenu } from "./menu";

export function generateAboutUs() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Contact Us';

  const email = document.createElement('h3');
  email.textContent = 'thezahbrahs@pizza.net';

  const phoneNumber = document.createElement('h3');
  phoneNumber.textContent = '(123) 456-7890';

  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', generateHomePage);

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', generateMenu);

  const aboutButton = document.createElement('button');
  aboutButton.textContent = 'About Us';

  nav.append(homeButton, aboutButton,  menuButton);
  content.append(header, nav, email, phoneNumber);
}

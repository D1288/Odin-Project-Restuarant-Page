import { generateHomePage } from "./pageLoad";
import { generateAboutUs } from "./about";

export function generateMenu() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Menu';

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  const menuItem1 = document.createElement('div');
  menuItem1.classList.add('menu-item');
  const menuItem1Img = document.createElement('img');
  menuItem1Img.setAttribute('src', '../img/menuitem.jpg');
  menuItem1Img.setAttribute('alt', 'menuitem-1');
  const menuItem1Info = document.createElement('h3');
  menuItem1Info.textContent = `Lorem ipsum nulla nostrum eligendi, officia amet explicabo minima ducimus voluptas, corrupti nes.`;
  menuItem1.append(menuItem1Img, menuItem1Info);
  menuItem1Img.style.width = '400px'

  const menuItem2 = document.createElement('div');
  menuItem2.classList.add('menu-item');
  const menuItem2Img = document.createElement('img');
  menuItem2Img.setAttribute('src', '../img/menuitem.jpg');
  menuItem2Img.setAttribute('alt', 'menuitem-2');
  const menuItem2Info = document.createElement('h3');
  menuItem2Info.textContent = `Lorem ipsum nulla nostrum eligendi, officia amet explicabo minima ducimus voluptas, corrupti nes.`;
  menuItem2.append(menuItem2Img, menuItem2Info);
  menuItem2Img.style.width = '400px'


  const menuItem3 = document.createElement('div');
  menuItem3.classList.add('menu-item');
  const menuItem3Img = document.createElement('img');
  menuItem3Img.setAttribute('src', '../img/menuitem.jpg');
  menuItem3Img.setAttribute('alt', 'menuitem-3');
  const menuItem3Info = document.createElement('h3');
  menuItem3Info.textContent = `Lorem ipsum nulla nostrum eligendi, officia amet explicabo minima ducimus voluptas, corrupti nes.`;
  menuItem3.append(menuItem3Img, menuItem3Info);
  menuItem3Img.style.width = '400px'



  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', generateHomePage);

  const aboutButton = document.createElement('button');
  aboutButton.textContent = 'About Us';
  aboutButton.addEventListener('click', generateAboutUs);

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';

  nav.append(homeButton, aboutButton, menuButton);
  menuContainer.append(menuItem1, menuItem2, menuItem3);
  content.append(header, nav, menuContainer);
}

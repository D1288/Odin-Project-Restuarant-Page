import { generateHomePage } from "./pageLoad";
import { generateAboutUs } from "./about";



export function generateMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = ''
    const header = document.createElement('h1')
    header.textContent = 'Menu'
    const menuItem = document.createElement('img')
    menuItem.setAttribute('src', '../img/menuitem.jpg')
    const itemInfo = document.createElement('p')
    itemInfo.textContent = `lorem ipsum  nulla nostrum eligendi, officia amet
                            explicabo minima ducimus voluptas, corrupti nes`;

    const homeButton = document.createElement('button')
    homeButton.textContent = 'Home'

    const aboutButton = document.createElement('button')
    aboutButton.textContent = 'About Us'

    content.append(header, menuItem, itemInfo, homeButton, aboutButton);

    homeButton.addEventListener('click', generateHomePage);
    aboutButton.addEventListener('click', generateAboutUs);


}
import { generateAboutUs } from "./about";
import { generateMenu } from "./menu";

export function generateHomePage() {
    const content = document.querySelector('#content');
    content.innerHTML = ''


    const header = document.createElement('h1');
    const pizzaMan = document.createElement('img')
    const description = document.createElement('h3')
    const aboutButton = document.createElement('button');
    const menubutton = document.createElement('button');


    header.textContent = 'Hu-Za!'
    pizzaMan.setAttribute('src', '../img/pizza.png')
    description.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                           dignissimos reprehenderit autem nulla nostrum eligendi, officia amet
                           explicabo minima ducimus voluptas, corrupti nesciunt! Blanditiis,
                           molestias ? Earum neque illo exercitationem perferendis!`;

    content.append(header, pizzaMan, description, aboutButton, menubutton)

    aboutButton.textContent = 'About Us';
    menubutton.textContent = 'Menu'
    aboutButton.addEventListener('click', generateAboutUs)
    menubutton.addEventListener('click', generateMenu)
}
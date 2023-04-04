import { generateAboutUs } from "./about";
import { generateMenu } from "./menu";

export function generateHomePage() {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  const header = document.createElement('h1');
  header.textContent = 'Hu-Za!';

  const pizzaMan = document.createElement('img');
  pizzaMan.setAttribute('src', '../img/pizza.png');

  const description = document.createElement('h3');
  description.textContent = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                             dignissimos reprehenderit autem nulla nostrum eligendi, officia amet
                             explicabo minima ducimus voluptas, corrupti nesciunt! Blanditiis,
                             molestias ? Earum neque illo exercitationem perferendis!`;

  const nav = document.createElement('nav');

  const homeButton = document.createElement('button');
  homeButton.textContent = 'Home';

  const aboutButton = document.createElement('button');
  aboutButton.textContent = 'About Us';
  aboutButton.addEventListener('click', generateAboutUs);

  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.addEventListener('click', generateMenu);

  nav.append(homeButton, aboutButton, menuButton);
  content.append(header, nav, pizzaMan, description);
}

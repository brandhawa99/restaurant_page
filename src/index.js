import {menu} from './menu.js'
import{about} from './aboutUs'
import { home } from './home.js';
import './style.css';

(() =>{
    const mother = document.getElementById('content')
    const container = document.createElement('div');
    
        const header = document.createElement('div');
        const title = document.createElement('div');
        const tabs = document.createElement('div');

        header.classList.add('header');
        title.classList.add('title');
        tabs.classList.add('tabs')
        
        const home_button = document.createElement('button');
        const menu_button = document.createElement('button');
        const about_button = document.createElement('button');
        
        //add event listeners to button
        home_button.addEventListener('click',() =>{
            clearBoard();
            container.appendChild(home())
        })
        menu_button.addEventListener('click',() =>{
            clearBoard(); 
            container.appendChild(menu());
        })
        about_button.addEventListener('click',() =>{
            clearBoard();
            container.appendChild(about());
        })
        
        title.textContent = "Green Olive";
        home_button.textContent = "home";
        menu_button.textContent = "menu";
        about_button.textContent = "about us";
        
        tabs.appendChild(home_button)
        tabs.appendChild(menu_button)
        tabs.appendChild(about_button)
        
        header.appendChild(title);
        header.appendChild(tabs);
        
        mother.appendChild(header)
        mother.appendChild(container);

        function clearBoard(){
            container.innerHTML = "";
        }
        container.appendChild(home());
        
})();
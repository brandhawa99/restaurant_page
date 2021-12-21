export function home(){
    const container = document.createElement('div');
    const title = document.createElement('div');
    const intro = document.createElement('div');

    title.textContent = "Welcome to Green Olive!";
    intro.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    title.classList.add('title');
    container.classList.add('container')
    intro.classList.add('intro');


    container.appendChild(title);
    container.appendChild(intro);

    return container
}
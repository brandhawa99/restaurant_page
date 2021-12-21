export function home(){
    const container = document.createElement('div');
    const title = document.createElement('div');
    title.textContent = "Welcome to Green Olive!";
    title.classList.add('title');
    container.appendChild(title);
    return container
}
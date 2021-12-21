export function menu(){
    
    const container = document.createElement('div');
    const app = document.createElement('div');
    const bev = document.createElement('div');
    const meals = document.createElement('div');
    const title = document.createElement('div')

    title.textContent = "Menu"
    title.classList.add('title');
    container.classList.add('container')


    app.textContent = "peanuts \n cucumber \n white bread with butter \n"



    container.appendChild(title)
    container.appendChild(app);

    return container;

}
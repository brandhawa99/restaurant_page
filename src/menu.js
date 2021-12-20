export function menu(){
    
    const container = document.createElement('div');
    const app = document.createElement('div');
    const bev = document.createElement('div');
    const meals = document.createElement('div');
    container.innerHTML = "<h1> MENU</h1>"

    app.textContent = "peanuts \n cucumber \n white bread with butter \n"



    container.appendChild(app);

    return container;

}
function about(){
    const footer = document.createElement('div');
    const title = document.createElement('div')

    const list  = document.createElement('ul');
    const phone = document.createElement('li');
    const email = document.createElement('li');
    const review = document.createElement('li');

    title.classList.add('title');

    title.textContent = "About Us";
    phone.textContent = "Phone# 123-132-1234";
    email.textContent = "Email: asdf@asdf.com";
    review.textContent = "leave a review";
    list.appendChild(phone)
    list.appendChild(email);
    list.appendChild(review);
    
    footer.appendChild(title);
    footer.appendChild(list);

    return footer;

}

export {about};
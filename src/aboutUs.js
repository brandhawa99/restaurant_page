function about(){
    const footer = document.createElement('div');
    footer.innerHTML="<h1> ABOUT US </h1>"
    
    const list  = document.createElement('ul');
    const phone = document.createElement('li');
    const email = document.createElement('li');
    const review = document.createElement('li');

    phone.textContent = "Phone# 123-132-1234";
    email.textContent = "Email: asdf@asdf.com";
    review.textContent = "leave a review";
    list.appendChild(phone)
    list.appendChild(email);
    list.appendChild(review);

    footer.appendChild(list);

    return footer;

}

export {about};
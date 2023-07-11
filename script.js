const header = document.querySelector("header")
window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", window.scrollY > 100)
});

let menu = document.querrySelector('#menu-icon');
let navlist = document.querrySelector('.navlist');

menu.onclick = () => {
    menu.classListtoggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open')
};


const form = document.getElementById('comment-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comment = document.getElementById('comment').value;

  console.log(`Name: ${name}\nEmail: ${email}\nComment: ${comment}`);

  // You can submit the form data to a server using fetch or XMLHttpRequest here
});

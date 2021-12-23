var menu = document.getElementById('menu');

menu.addEventListener('click', () => {
  for(let i = 0; i < menu.childElementCount; i++){
    menu.children[i].classList.remove('nav-active');
  }
  event.target.classList.add('nav-active');
});

<button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

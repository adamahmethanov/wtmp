function changeBackgroundColor() {
  const body = document.querySelector('body');
  const pinkButton = document.querySelector('.button-pink');

  if (body.classList.contains('pink-bg')) {
    body.classList.remove('pink-bg');
    pinkButton.innerText = "Pinkki väri";
    localStorage.setItem('background-color', '');
  } else {
    body.classList.add('pink-bg');
    pinkButton.innerText = "Pinkki (Valittu)";
    localStorage.setItem('background-color', 'pink');
    document.body.style.backgroundColor = "pink";
  }
}

window.onload = function() {
  const body = document.querySelector('body');
  const pinkButton = document.querySelector('.button-pink');
  const backgroundColor = localStorage.getItem('background-color');

  if (backgroundColor === 'pink') {
    body.classList.add('pink-bg');
    pinkButton.innerText = "Pinkki (Valittu)";
    document.body.style.backgroundColor = "pink";
  }
}

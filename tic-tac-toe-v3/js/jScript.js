
const elements = (a) => {
  return document.createElement(`${a}`);
}

(function(){
  const div = elements('div');
    div.id = 'start';
    div.className = 'screen screen-start';

  const header = elements('header');

  const h1 = elements('h1');
    h1.innerHTML = 'Tic Tac Toe';

  const a = elements('a');
    a.className = 'button';
    a.href = '#';
    a.innerHTML = 'Start Game';

  div.appendChild(header);
  header.appendChild(h1);
  header.appendChild(a);

  const body = document.querySelector('body');
  body.children[0].style.display = 'none';
  body.appendChild(div)
})()

const turnPage = () => {
  const body = document.querySelector('body');
  const button = document.querySelector('a');
  button.addEventListener('click', function(){
    console.log(body.children);
    body.children[0].style.display = 'block';
    body.children[2].style.display = 'none'
  })
}

turnPage()

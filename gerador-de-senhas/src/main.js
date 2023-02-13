import { nanoid } from 'nanoid';

const btnSenhaSegura = document.querySelector('button');
const h2 = document.querySelector('h2');

btnSenhaSegura.addEventListener('click', () => {
  h2.innerHTML = nanoid();
});

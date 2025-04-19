const btnNao = document.getElementById('btnNao');
const btnSim = document.getElementById('btnSim');

let movendo = true;

btnNao.addEventListener('click', () => {
  if (!movendo) return;

  const largura = document.body.clientWidth - btnNao.offsetWidth;
  const altura = document.body.clientHeight - btnNao.offsetHeight;
  const x = Math.random() * largura;
  const y = Math.random() * altura;

  btnNao.style.position = 'absolute';
  btnNao.style.left = `${x}px`;
  btnNao.style.top = `${y}px`;
});

btnSim.addEventListener('click', () => {
  movendo = false;
  window.location.href = "sim.html";
});

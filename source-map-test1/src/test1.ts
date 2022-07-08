const btn = document.getElementById('btn');

function add(a: number, b: number): number {
  return a + b;
}

function handlerClick() {
  console.log('1+2=', add(1, 2));
}

btn?.addEventListener('click', handlerClick);



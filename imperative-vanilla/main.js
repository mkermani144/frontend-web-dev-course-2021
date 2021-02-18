let inputValue = null;

let lastRenderedCount = null;

const button = document.getElementById('button');
const input = document.getElementById('input');
const root = document.getElementById('root');

const range = (length) => [...Array(length).keys()];

const makeRootEmpty = () => {
  root.innerHTML = null;
};

input.addEventListener('change', (event) => {
  inputValue = +event.target.value;
});

button.addEventListener('click', () => {
  const diff = inputValue - lastRenderedCount;

  if (!diff) return;

  if (diff % 2) {
    makeRootEmpty();
    const isOdd = !!(inputValue % 2);
    range(inputValue).forEach(() => {
      const element = document.createElement('div');
      element.className = isOdd ? 'circle' : 'square';
      root.appendChild(element);
    });
  } else {
    if (diff > 0) {
      const isOdd = !!(inputValue % 2);
      range(diff).forEach(() => {
        const element = document.createElement('div');
        element.className = isOdd ? 'circle' : 'square';
        root.appendChild(element);
      });
    } else {
      range(-1 * diff).forEach(() => {
        root.removeChild(root.lastChild);
      });
    }
  }
  lastRenderedCount = inputValue;
});
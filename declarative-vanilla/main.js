let inputValue = null;

let lastRenderedCount = null;

const button = document.getElementById('button');
const input = document.getElementById('input');

const render = (count, circleRenderer, squareRenderer) => {
  const root = document.getElementById('root');

  const range = (length) => [...Array(length).keys()];

  const makeRootEmpty = () => {
    root.innerHTML = null;
  };

  const diff = count - lastRenderedCount;

  if (!diff) return;

  if (diff % 2) {
    makeRootEmpty();
    const isOdd = !!(count % 2);
    range(count).forEach(() => {
      const element = isOdd ? circleRenderer() : squareRenderer();
      root.appendChild(element);
    });
  } else {
    if (diff > 0) {
      const isOdd = !!(count % 2);
      range(diff).forEach(() => {
        const element = isOdd ? circleRenderer() : squareRenderer();
        root.appendChild(element);
      });
    } else {
      range(-1 * diff).forEach(() => {
        root.removeChild(root.lastChild);
      });
    }
  }
  lastRenderedCount = count;
};

const circleRenderer = () => {
  const element = document.createElement('div');
  element.className = 'circle';
  return element;
};

const squareRenderer = () => {
  const element = document.createElement('div');
  element.className = 'square';
  return element;
};

input.addEventListener('change', (event) => {
  inputValue = +event.target.value;
});

button.addEventListener('click', () => {
  render(inputValue, circleRenderer, squareRenderer);
});
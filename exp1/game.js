const maxAPI = require('max-api');

let x = 0;
let y = 0;

maxAPI.addHandler('input', dir => {
  if (dir === 'UP') {
    y -= 1;
  } else if (dir === 'DOWN') {
    y += 1;
  } else if (dir === 'LEFT') {
    x -= 1;
  } else if (dir === 'RIGHT') {
    x += 1;
  }
  maxAPI.post(`x: ${x}, y: ${y}`);
  maxAPI.outlet(x, y);
});

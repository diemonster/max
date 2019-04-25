const maxAPI = require('max-api');

maxAPI.post('Hello from BITCHEZ');

maxAPI.addHandler('greeting', () => {
  maxAPI.post('Got greeting');
});

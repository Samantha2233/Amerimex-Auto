// TODO: import Token Service for authorization

const BASE_URL = '/api/cars';

export default {
  index,
  create
}

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function create(car) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(car)
  }).then(res => res.json());
}
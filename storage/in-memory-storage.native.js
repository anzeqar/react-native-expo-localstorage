const storage = {
  set,
  get,
  getAll,
  remove,
  clearAll,
};

let dbStore = {};

export default storage;

function set(key, value) {
  dbStore[key] = value;
}

function get(key) {
  return dbStore[key];
}

function getAll() {
  return dbStore;
}

function remove(key) {
  delete dbStore[key];
}

function clearAll() {
  dbStore = {};
}

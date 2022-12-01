const namespace = "appStore";
initWithNamespace(namespace);

const storageService = {
  setItem,
  setToken,
  getToken,
  removeItem,
  getItem,
  store,
  clear,
  getAllItems,
};

export default storageService;

function setItem(key, value) {
  const items = storageService.store();

  items[key] = value;
  localStorage[namespace] = JSON.stringify(items);

  return storageService;
}

function setToken(value) {
  return setItem("token", value);
}

function getToken(value) {
  return getItem("token", value);
}

function removeItem(key) {
  const items = storageService.store();
  delete items[key];
  localStorage[namespace] = JSON.stringify(items);

  return storageService;
}

function getItem(key) {
  const items = storageService.store();

  return items[key];
}

function store() {
  return JSON.parse(localStorage[namespace]);
}

function clear() {
  delete localStorage[namespace];
  initWithNamespace(namespace);

  return storageService;
}

function initWithNamespace(nspace) {
  if (typeof localStorage !== "undefined") {
    localStorage[nspace] = localStorage[nspace] ? localStorage[nspace] : "{}";
  }
}

function getAllItems() {
  return Promise.resolve(JSON.parse(localStorage[namespace]));
}

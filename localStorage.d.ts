export default storageService;
declare namespace storageService {
    export { setItem };
    export { setToken };
    export { getToken };
    export { removeItem };
    export { getItem };
    export { store };
    export { clear };
    export { getAllItems };
}
declare function setItem(key: any, value: any): {
    setItem: typeof setItem;
    setToken: typeof setToken;
    getToken: typeof getToken;
    removeItem: typeof removeItem;
    getItem: typeof getItem;
    store: typeof store;
    clear: typeof clear;
    getAllItems: typeof getAllItems;
};
declare function setToken(value: any): {
    setItem: typeof setItem;
    setToken: typeof setToken;
    getToken: typeof getToken;
    removeItem: typeof removeItem;
    getItem: typeof getItem;
    store: typeof store;
    clear: typeof clear;
    getAllItems: typeof getAllItems;
};
declare function getToken(value: any): any;
declare function removeItem(key: any): {
    setItem: typeof setItem;
    setToken: typeof setToken;
    getToken: typeof getToken;
    removeItem: typeof removeItem;
    getItem: typeof getItem;
    store: typeof store;
    clear: typeof clear;
    getAllItems: typeof getAllItems;
};
declare function getItem(key: any): any;
declare function store(): any;
declare function clear(): {
    setItem: typeof setItem;
    setToken: typeof setToken;
    getToken: typeof getToken;
    removeItem: typeof removeItem;
    getItem: typeof getItem;
    store: typeof store;
    clear: typeof clear;
    getAllItems: typeof getAllItems;
};
declare function getAllItems(): any;

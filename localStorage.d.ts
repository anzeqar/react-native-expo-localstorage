export default storage;
declare namespace storage {
    export { set };
    export { get };
    export { getAll };
    export { remove };
    export { clearAll };
}
declare function set(key: any, value: any): void;
declare function get(key: any): any;
declare function getAll(): {};
declare function remove(key: any): void;
declare function clearAll(): void;

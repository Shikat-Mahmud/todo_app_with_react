// variable for local storage key
const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {

    // fetch data from local storage
    const rawTodos = localStorage.getItem(todoKey);

    // if there is no data the set it as [] empty array
    if (!rawTodos) return [];

    // parse string data to array data
    return JSON.parse(rawTodos);
};



export const setLocalStorageTodoData = (task) => {

    // todo store value to localstorage | use JSON.stringify() to convert array data to string
    return localStorage.setItem(todoKey, JSON.stringify(task));
};
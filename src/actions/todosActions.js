import {TODOS_ACTIONS} from "./constants";

// const stubTodos = [
//     {id: 1, title: 'Купить хлеб', completed: false},
//     {id: 2, title: 'Купить молоко', completed: false},
//     {id: 3, title: 'Купить сок', completed: false},
// ];

const TODOS_URL = 'https://jsonplaceholder.typicode.com/users/1/todos?userId=8';

export const addTodo = title => ({
    type: TODOS_ACTIONS.ADD_TODO,
    payload: {title}
});

export const deleteTodo = id => ({
    type: TODOS_ACTIONS.DELETE_TODO,
    payload: {id}
});

export const toggleTodo = id => ({
    type: TODOS_ACTIONS.TOGGLE_TODO,
    payload: {id}
});

export const setLoading = state => ({
    type: TODOS_ACTIONS.SET_LOADING,
    payload: {state}
});

export const updateTodos = todos => ({
    type: TODOS_ACTIONS.UPDATE_TODOS,
    payload: {todos}
});

export const loadTodos = () =>
    async (dispatch, getState) => {
    const todosExist = Boolean(getState().todosState.todos.length);
    if (!todosExist) {
        const todos = await serviceLayer(TODOS_URL);
        dispatch(updateTodos(todos));
    }
    dispatch(setLoading(false));
};

// from service layer
export const serviceLayer = async (url) => {
    const response = await fetch(url);
    return await response.json();
};

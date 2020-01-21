import {TODOS_ACTIONS} from "./constants";

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

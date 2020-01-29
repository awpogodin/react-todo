import {createSelector} from 'reselect';

export const getCurrentTodos = ({todosState}) => todosState.todos;
export const isTodosExist = state => Boolean(getCurrentTodos(state).length);
export const isLoading = ({todosState}) => todosState.loading;

export const getActiveTodosCount = createSelector(
    getCurrentTodos,
    todos => todos.filter(todo => !todo.completed).length
);

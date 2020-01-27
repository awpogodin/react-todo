export const getCurrentTodos = ({todosState}) => todosState.todos;
export const isTodosExist = state => Boolean(getCurrentTodos(state).length);
export const isLoading = ({todosState}) => todosState.loading;

export const getActiveTodosCount = ({todosState}) => todosState.todos.filter(todo => !todo.completed).length;

const memoState = {};
const createSelector = (selector, func) => (state) => {
    const obj = selector(state);
    if (!memoState.saved) {
        memoState.saved = obj;
        memoState.result = func(obj);
        return memoState.result;
    }
    if (memoState.saved === obj) {
        return memoState.result;
    } else {
        memoState.result = func(obj);
        return memoState.result;
    }
};

export const getActiveTodosCountMemo = createSelector(
    getCurrentTodos,
    todos => todos.filter(todo => !todo.completed).length
);

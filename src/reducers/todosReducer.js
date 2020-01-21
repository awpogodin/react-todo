import {TODOS_ACTIONS} from "../actions/constants";

const initialState = {
    todos: [
        {id: 1, title: 'Купить хлеб', completed: false},
        {id: 2, title: 'Купить молоко', completed: false},
        {id: 3, title: 'Купить сок', completed: false},
    ],
    loading: false
};

function todosReducer(state = initialState, {type, payload}) {
    switch (type) {
        case TODOS_ACTIONS.ADD_TODO: {
            const {title} = payload;
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {id: Date.now(), title, completed: false}
                ]
            }
        }
        case TODOS_ACTIONS.DELETE_TODO: {
            const {id} = payload;
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== id)
            }
        }
        case TODOS_ACTIONS.TOGGLE_TODO: {
            const {id} = payload;
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === id) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo;
                })
            }
        }
        case TODOS_ACTIONS.SET_LOADING: {
            const {state} = payload;
            return {
                ...state,
                loading: state,
            }
        }
        default:
            return state;
    }
}

export default todosReducer;

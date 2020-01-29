import React from 'react';
import Header from "../components/todos/Header";
import AddTodo from "../components/todos/AddTodo";
import TodoList from "../components/todos/TodoList";
import {connect} from "react-redux";
import {addTodo, deleteTodo, loadTodos, setLoading, toggleTodo} from "../actions/todosActions";
import {getActiveTodosCount, getActiveTodosCountMemo, getCurrentTodos, isLoading} from "../selectors/todosSelectors";

class TodosScreen extends React.Component {
    componentDidMount() {
        // this.props.loadTodos();
        this.props.setLoading(false);
    }

    render() {
        const {todos, loading, addTodo, deleteTodo, toggleTodo, activeTodosCount} = this.props;
        return (
            <>
                <Header title='todos'/>
                <AddTodo
                    onAdd={addTodo}
                    loading={loading}
                />
                <span className="activeTodosCount">Active todos: {activeTodosCount}</span>
                <TodoList
                    todos={todos}
                    onToggle={toggleTodo}
                    onDelete={deleteTodo}
                    loading={loading}
                />
            </>
        )
    }
}

const mapStateToProps = state => ({
    todos: getCurrentTodos(state),
    loading: isLoading(state),
    activeTodosCount: getActiveTodosCountMemo(state),
});

const mapDispatchToProps = ({
    addTodo,
    deleteTodo,
    toggleTodo,
    loadTodos,
    setLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosScreen);

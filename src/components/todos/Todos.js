import React from 'react';
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addTodo, deleteTodo, loadTodos, setLoading, toggleTodo} from "../../actions/todosActions";

class Todos extends React.Component {
    componentDidMount() {
        // this.props.loadTodos();
        this.props.setLoading(false);
    }

    render() {
        const {todos, loading, addTodo, deleteTodo, toggleTodo} = this.props;
        return (
            <>
                <Header title='todos'/>
                <AddTodo
                    onAdd={addTodo}
                    loading={loading}
                />
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
    todos: state.todosState.todos,
    loading: state.todosState.loading
});

const mapDispatchToProps = ({
    addTodo,
    deleteTodo,
    toggleTodo,
    loadTodos,
    setLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

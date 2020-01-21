import React from 'react';
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import {connect} from "react-redux";
import {addTodo, deleteTodo, toggleTodo} from "../../actions/todosActions";

class Todos extends React.Component {
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
    todos: state.todos.todos,
    loading: state.todos.loading
});

const mapDispatchToProps = ({
    addTodo,
    deleteTodo,
    toggleTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);

import React from 'react';
import Todo from "./Todo";
import CircularProgress from "@material-ui/core/CircularProgress";

const TodoList = (props) => {
    const {todos, onToggle, onDelete, loading} = props;
    return (
        <div className="todolist">

            {loading ? (
                <div className="todolist_loading">
                    <CircularProgress color="secondary"/>
                </div>
                ) :
                (todos.length>0 ? (todos.map((todo) => {
                return (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                )
            })) : (
                <span className="todolist_notodos">No todos</span>
            ))}
        </div>
    )
};

export default TodoList;
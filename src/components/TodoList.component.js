import React from 'react';
import Todo from "./Todo.component";

const TodoList = (props) => {
    const {todos, onToggle, onDelete} = props;
    return (
        <div className="todolist">
            {todos.map((todo) => {
                return (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                )
            })}
        </div>
    )
};

export default TodoList;
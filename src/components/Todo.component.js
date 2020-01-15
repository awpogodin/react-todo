import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton";

class Todo extends React.Component {
    onToggleHandler = () => {
        const {onToggle, todo} = this.props;
        onToggle(todo.id);
    };

    onDeleteHandler = () => {
        const {onDelete, todo} = this.props;
        onDelete(todo.id);
    };

    render() {
        const {title, completed} = this.props.todo;
        return (
            <div className="todolist_todo">
                <Checkbox
                    checked={completed}
                    onChange={this.onToggleHandler}
                    value="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    readOnly
                />
                <span onClick={this.onToggleHandler} className={"todo_title" + (completed ? ' todo_title__done' : '')}>{title}</span>
                <IconButton onClick={this.onDeleteHandler}>
                    <Icon>cancel</Icon>
                </IconButton>
            </div>
        )
    }
}

export default Todo;
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from '@material-ui/core/Icon';
import IconButton from "@material-ui/core/IconButton";

class Todo extends React.Component {
    handleChange () {
        this.props.onToggle(this.props.todo.id);
    };

    render() {
        const {title, completed} = this.props.todo;
        return (
            <div className="todolist_todo">
                <Checkbox
                    checked={completed}
                    onChange={this.handleChange}
                    value="primary"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <span className="todo_title">{title}</span>
                <IconButton>
                    <Icon>cancel</Icon>
                </IconButton>
            </div>
        )
    }
}

export default Todo;
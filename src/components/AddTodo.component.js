import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddTodo extends React.Component {
    render() {
        return (
            <div className="addtodo">
                <TextField className="addtodo_input" label="Todo"/>
                <Button size="small" color="primary">Add</Button>
            </div>
        )
    }
}

export default AddTodo;
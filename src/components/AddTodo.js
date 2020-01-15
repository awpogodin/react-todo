import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            input: e.target.value
        })
    };

    onAddHandler = () => {
        const {onAdd} = this.props;
        onAdd(this.state.input);
        this.setState({
            input: ''
        });
    };

    render() {
        return (
            <div className="addtodo">
                <TextField
                    className="addtodo_input"
                    label="Todo"
                    onChange={this.onChangeHandler}
                    value={this.state.input}
                />
                <Button
                    size="small"
                    color="primary"
                    onClick={this.onAddHandler}
                >
                    Add
                </Button>
            </div>
        )
    }
}

export default AddTodo;
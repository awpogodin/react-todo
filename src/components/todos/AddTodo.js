import React from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        }
    }

    onKeyDownHandler = (e) => {
        if (e.key === 'Enter') {
            this.onAddHandler()
        }
    };

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
                <Input
                    className="addtodo_input"
                    variant="standard"
                    autoFocus={true}
                    onKeyDown={this.onKeyDownHandler}
                    onChange={this.onChangeHandler}
                    value={this.state.input}
                    inputProps={{
                        disabled: this.props.loading
                    }}
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
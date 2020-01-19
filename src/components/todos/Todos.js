import React from 'react';
import Header from "./Header";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

class Todos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            loading: true
        }
    };

    componentDidMount() {
        setTimeout(() => {
            this.setState(() => {
                return {
                    todos: [
                        {id: 1, title: 'Купить хлеб', completed: false},
                        {id: 2, title: 'Купить молоко', completed: false},
                        {id: 3, title: 'Купить сок', completed: false},
                    ],
                    loading: false
                }
            })
        }, 1000);
    }

    onToggle = (id) => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => {
                    if (todo.id === id) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo;
                })
            }
        })
    };

    onAdd = (title) => {
        if (title.trim()) {
            this.setState(prevState => {
                return {
                    todos: [
                        ...prevState.todos,
                        {id: Date.now(), title, completed: false}
                    ]
                }
            })
        }
    };

    onDelete = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(todo => todo.id !== id)
            }
        })
    };

    render() {
        return (
            <>
                <Header title='todos'/>
                <AddTodo
                    onAdd={this.onAdd}
                    loading={this.state.loading}
                />
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.onToggle}
                    onDelete={this.onDelete}
                    loading={this.state.loading}
                />
            </>
        )
    }
}

export default Todos;
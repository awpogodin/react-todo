import React from 'react';
import './App.css';
import Header from "./components/Header.component";
import TodoList from "./components/TodoList.component";
import AddTodo from "./components/AddTodo.component";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [
                {id: 1, title: 'Купить хлеб', completed: false},
                {id: 2, title: 'Купить молоко', completed: false},
                {id: 3, title: 'Купить сок', completed: false},
            ]
        }
    };

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
        this.setState(prevState => {
            return {
                todos: [
                    ...prevState.todos,
                    {id: Date.now(), title, completed: false}
                ]
            }
        })
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
            <div className="app">
                <Header/>
                <AddTodo
                    onAdd={this.onAdd}
                />
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.onToggle}
                    onDelete={this.onDelete}
                />
            </div>
        )
    };
}

export default App;

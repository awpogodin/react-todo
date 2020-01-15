import React from 'react';
import './App.css';
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

const STORAGE_TODOS = 'todos';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            loading: true
        };

        this.localTodos = [];
    };

    componentDidMount() {
        this.localTodos = JSON.parse(localStorage.getItem(STORAGE_TODOS)) || [];
        setTimeout(() => {
            this.setState(() => {
                return {
                    todos: [
                        ...this.localTodos
                    ],
                    loading: false
                }
            })
        }, 2000);
    }

    updateLocalStorage = () => {
        localStorage.setItem(STORAGE_TODOS, JSON.stringify(this.state.todos));
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
        }, () => {
            this.updateLocalStorage();
        });
    };

    onAdd = (title) => {
        if (title.trim()) {
            const todo = {id: Date.now(), title, completed: false};
            this.setState(prevState => {
                return {
                    todos: [
                        ...prevState.todos,
                        todo
                    ]
                }
            }, () => {
                this.updateLocalStorage();
            });
        }
    };

    onDelete = id => {
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(todo => todo.id !== id)
            }
        }, () => {
            this.updateLocalStorage();
        });

    };

    render() {
        return (
            <div className="app">
                <Header/>
                <AddTodo
                    loading={this.state.loading}
                    onAdd={this.onAdd}
                />
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.onToggle}
                    onDelete={this.onDelete}
                    loading={this.state.loading}
                />
            </div>
        )
    };
}

export default App;

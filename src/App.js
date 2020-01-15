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
        console.log(this.localTodos);
        localStorage.setItem(STORAGE_TODOS, JSON.stringify(this.localTodos));
    };

    onToggle = (id) => {
        const toggleTodos = (todo) => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo;
        };
        this.localTodos = this.localTodos.map(todo => toggleTodos(todo));
        this.setState(prevState => {
            return {
                todos: prevState.todos.map(todo => toggleTodos(todo))
            }
        });
        this.updateLocalStorage();
    };

    onAdd = (title) => {
        if (title.trim()) {
            const todo = {id: Date.now(), title, completed: false};
            this.localTodos.push(todo);
            this.setState(prevState => {
                return {
                    todos: [
                        ...prevState.todos,
                        todo
                    ]
                }
            });
            this.updateLocalStorage();
        }
    };

    onDelete = id => {
        this.localTodos = this.localTodos.filter(todo => todo.id !== id);
        this.setState(prevState => {
            return {
                todos: prevState.todos.filter(todo => todo.id !== id)
            }
        });
        this.updateLocalStorage();
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
                    loading={this.state.loading}
                />
            </div>
        )
    };
}

export default App;

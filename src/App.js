import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import TodosScreen from "./screens/TodosScreen";
import CardsScreen from "./screens/CardsScreen";
import NavMenu from "./components/NavMenu";
import FormScreen from "./screens/FormScreen";

class App extends React.Component {
    render() {
        return (
            <Router>
                <NavMenu/>
                <Switch>
                    <Route path='/cards'>
                        <CardsScreen/>
                    </Route>
                    <Route path='/forms'>
                        <FormScreen/>
                    </Route>
                    <Route path='/'>
                        <TodosScreen/>
                    </Route>
                </Switch>
            </Router>
        )
    };
}

export default App;

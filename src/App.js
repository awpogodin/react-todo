import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Todos from "./screens/TodosScreen";
import CardsScreen from "./screens/CardsScreen";
import NavMenu from "./components/NavMenu";

class App extends React.Component {
    render() {
        return (
            <Router>
                <NavMenu/>
                <Switch>
                    <Route path='/cards'>
                        <CardsScreen/>
                    </Route>
                    <Route path='/'>
                        <Todos/>
                    </Route>
                </Switch>
            </Router>
        )
    };
}

export default App;

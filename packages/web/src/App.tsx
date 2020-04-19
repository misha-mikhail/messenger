import React from 'react';
import { Home } from "./Components/Home";
import { Auth } from './Components/Auth';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

export default function App() {
    const isLoggedIn = false;

    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/auth">Auth</Link>
                    </li>
                </ul>

                <Switch>

                    <Route path="/auth">
                    {
                        !isLoggedIn
                        ? <Auth />
                        : <h2>Already logged in.</h2>
                    }
                    </Route>

                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}


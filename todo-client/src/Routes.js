import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Home from "./screens/Home";
import Tasks from "./screens/Tasks";

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/tasks"><Tasks /></Route>
            </Switch>
        </Router>
    );
}


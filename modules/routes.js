import React from "react";
import {Router, Route, IndexRoute, browserHistory} from "react-router";
import App from "./App";
import About from "./About";
import Repos from "./Repos";
import Repo from "./Repo";
import Home from "./Home";
import Checkbox from "./Checkbox";

export default function () {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/repos" component={Repos}>
                    <Route path="/repos/:userName/:repoName" component={Repo}/>
                </Route>
                <Route path="/checkbox" component={Checkbox}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>

    )
}


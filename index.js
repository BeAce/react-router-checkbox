import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import Routes from "./modules/routes";

render((
    <Routes/>
), document.getElementById('app'));

import React from "react";
import NavLink from "./NavLink";

export default React.createClass({
    render() {
        return (
            <div>
                <ul role="nav" className="nav">
                    <li><h1>React Router Tutorial</h1></li>
                    <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/repos">Repos</NavLink></li>
                    <li><NavLink to="/checkbox">checkbox</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

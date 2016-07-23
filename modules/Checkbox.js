import React from "react";
import _ from "lodash";

var Row = React.createClass({
    getInitialState: function () {
        return {
            checked: false
        };
    },
    checkIt: function () {
        this.props.callback(this.props.index, !this.props.checked, this.props.className);
        return;
    },
    render: function () {
        return (
            <tr className={this.props.className}>
                <td><input type="checkbox" checked={this.props.checked} onChange={this.checkIt}/></td>
                <td>{this.props.obj.id}</td>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.foo}</td>
                <td>{this.props.obj.age}</td>
            </tr>
        );
    }
});

var Table = React.createClass({
    getInitialState: function () {
        var rowState = [],
            className = [];
        for (var i = 0; i < this.props.rows.length; i++) {
            rowState[i] = false;
            className[i] = '';
        }
        return {
            checkAll: false,
            rowState: rowState,
            className: className
        };
    },
    checkRow: function (id, value) {
        this.state.rowState[id] = value;
        console.log(id);

        this.state.rowState[id] ? this.state.className[id] = 'tr-active' : this.state.className[id] = '';

        if (this.state.checkAll) {
            this.state.checkAll = !this.state.checkAll;
        }
        this.setState({
            rowState: this.state.rowState,
            checkAll: this.state.checkAll,
            className: this.state.className
        });
    },
    checkAll: function () {
        var rowState = [];
        var className = [];
        var checkState = !this.state.checkAll;
        for (var i = 0; i < this.state.rowState.length; i++) {
            rowState[i] = checkState;
            rowState[i] ? className[i] = 'tr-active' : className[i] = '';
        }
        this.state.checkAll = checkState;
        this.setState({
            rowState: rowState,
            checkAll: this.state.checkAll,
            className: className
        });
    },
    render: function () {
        var _this = this;
        var rows = _.map(this.props.rows, function (row, index) {
            return (<Row obj={row} index={index} key={row.id} checked={_this.state.rowState[index]}
                         callback={_this.checkRow} className={_this.state.className[index]}/>);
        });
        return (
            <table className="table" cellSpacing="0">
                <thead>
                <tr>
                    <th><input type="checkbox" checked={this.state.checkAll} onChange={this.checkAll}/></th>
                    <th>#</th>
                    <th>name</th>
                    <th>foo</th>
                    <th>age</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>

        );
    }
});

var rows = [
    {
        'id': 1,
        'foo': 'bar',
        'name': 'Jerry',
        'age': 23
    },
    {
        'id': 2,
        'foo': 'bar2',
        'name': 'Lily',
        'age': 88
    },
    {
        'id': 3,
        'foo': 'baz',
        'name': 'James',
        'age': 99
    }
];

export default React.createClass({
    render () {
        return (
            <Table rows={rows}/>
        )
    }
})

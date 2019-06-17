import React, { Component } from 'react'
import './todo-list-item.css'


export default class TodoListItem extends Component {

    state = {
        done: false
    }

    onLabelClick = () => {
        this.setState({
            done: true,
        })
    }

    onMarkImportant = () => {
        this.setState({
            important: true
        })
    }

    render = () => {
        const { label } = this.props
        const { done, important } = this.state

        let classNames = 'todo-list-item'
        if(done){
            classNames += ' done'
        }
        if(important){
            classNames += ' important'
        }
        
        return (
            <span className="todo-list-item">
                <span
                    className={classNames}
                    onClick={this.onLabelClick}
                    >{label}</span>
                <button
                    type="button"
                    className="btn btn-outline-success btn-small"
                    onClick={this.onMarkImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-small">
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )

    }
}
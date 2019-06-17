import React, { Component } from 'react'
import './todo-list-item.css'


export default class TodoListItem extends Component {

    render = () => {
        const { label, onDeleted,
                onToggleImportant,
                onToggleDone,
                important, done } = this.props

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
                    onClick={onToggleDone}
                    >{label}</span>
                <button
                    type="button"
                    className="btn btn-outline-success btn-small"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation"></i>
                </button>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-small"
                    onClick={onDeleted}
                >
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )

    }
}
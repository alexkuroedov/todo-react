import React, { Component } from 'react'
import './todo-list-item.css'


export default class TodoListItem extends Component {

    render() {
        const style = {
            color: this.props.important ? 'tomato' : 'black'
        }
        return (
            <span className="todo-list-item">
                <span className="todo-list-item-label" style={style} >{this.props.label}</span>
                <button type="button" className="btn btn-outline-sucess btn-small">
                    <i className="fa fa-exclamation"></i>
                </button>
                <button type="button" className="btn btn-outline-danger btn-small">
                    <i className="fa fa-trash-o"></i>
                </button>
            </span>
        )

    }
}
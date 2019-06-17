import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = () => {
    const items = [
        'Todo first',
        'Todo second',
        'Todo third',
    ]

    return (
        <ul>
            <li><TodoListItem/></li>
            <li><TodoListItem/></li>
        </ul>

    )
}

export default TodoList
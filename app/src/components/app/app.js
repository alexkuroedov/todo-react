import React from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import TodoList from '../todo-list/todo-list'
import ItemStatusFilter from '../item-status-filter/item-status-filter'


const App = () => {
    const todoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Make app', important: true, id: 2},
        {label: 'Have a lunch', important: false, id: 3},
    ]
    return (
        <div className="todo-app">
            <AppHeader toDo="3" done="1"/>
            <div className="search-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData}/>
        </div>
    )
}

export default App
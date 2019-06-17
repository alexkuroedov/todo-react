import React from 'react'
import ReactDOM from 'react-dom'

const TodoList = () => {
    const items = [
        'Todo first',
        'Todo second',
        'Todo third',
    ]

    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>

    )
}

const AppHeader = () => {
    return (
        <h1>Todo List</h1>
    )
}

const SearchPanel = () => {
    return <input placeholder="search" />
}

const App = () => {
    const loginBox = <span>Log in</span>
    return (
        <div>
            {loginBox}
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))


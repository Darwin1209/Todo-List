import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
    return (
        <ul>
            <li>Изучить React</li>
            <li>Создать приложение</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>Мой список дел</h1>
    );
};

const Search = () => {
    const searchStyle = {
        fontSize: '20px',
        color: 'blue',
    }

    return (
        <input style={searchStyle} placeholder="поиск"/>
    );
};

const App = () => {
    return (
        <div>
            <AppHeader/>
            <Search />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

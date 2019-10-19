import React from 'react';
import AppHeader from './AppHeader';
import Search from './Search';
import TodoList from './TodoList';
import ItemStatusFilter from './ItemStatusFilter';  
import './App.css'

const App = () => {

    const todoData = [
        {label: "Выпить кофе", important: false, id: 1},
        {label: "Создать приложение", important: true, id: 2},
        {label: "Сделать ещё что-то", important: false, id: 3}
    ]; 

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <Search />
                <ItemStatusFilter />
            </div>

            <TodoList todo={todoData} />
        </div>
    );
};

export default App;

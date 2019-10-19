import React from 'react';
import AppHeader from './AppHeader';
import Search from './Search';
import TodoList from './TodoList';

const App = () => {

    const todoData = [
        {label: "Выпить кофе", important: false, id: 1},
        {label: "Создать приложение", important: true, id: 2},
        {label: "Сделать ещё что-то", important: false, id: 3}
    ]; 

    return (
        <div>
            <AppHeader/>
            <Search />
            <TodoList  todo={todoData} />
        </div>
    );
};

export default App;

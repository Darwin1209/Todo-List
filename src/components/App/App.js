import React from 'react';

import AppHeader from '../AppHeader';
import Search from '../Search';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';  
import ItemAddForm from '../ItemAddForm';

import './App.css'

class App extends React.Component {
    
    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem("Создать приложение"),
        ] 
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState (({ todoData }) => {
            const idx = todoData.findIndex ( (el) => el.id === id);

            const newArray = [
                ...todoData.slice (0, idx),
                ...todoData.slice (idx + 1)
            ];

            return {
                todoData: newArray
           };
        });
    };

    createItem = (text) => {

        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];

            return {
                todoData: newArray,
            };
        });
    };

    toggleProperty (arr, id, propName) {
        const idx = arr.findIndex( (el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };

        return [
            ...arr.slice (0, idx), 
            newItem,
            ...arr.slice (idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState (({todoData}) => {  
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            };
        });
    };

    onToggleDone = (id) => {
        this.setState (({todoData}) => {  
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            };
        });
    };

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <Search />
                    <ItemStatusFilter />
                </div>
    
                <TodoList 
                    todo={ todoData }
                    onDeleted={ this.deleteItem } 
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant= { this.onToggleImportant }
                />

                <ItemAddForm
                    onCreate={ this.createItem }/>
            </div>
        );
    }
}

export default App;

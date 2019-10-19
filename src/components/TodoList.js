import React from 'react';
import TodoListItem from './TodoListItem'


const TodoList = ({todo}) => {

    const elements = todo.map((item) => {
        return (
            <li key={item.id}>
                <TodoListItem {...item} />
            </li>
        );
    })

    return (
        <ul>
            {elements}
        </ul>
    );
};

export default TodoList;

import React from 'react';

const TodoListItem = ({label, important = false}) => {

    const liStyle = {
        color: important ? "tomato" : "blac",
    }
     
    return (
        <span style={liStyle}>{label}</span>
    );
};

export default TodoListItem;

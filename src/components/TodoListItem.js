import React from 'react';
import './TodoListItem.css'

class TodoListItem extends React.Component {

    onLabelClick = () => {
        console.log(`Done: ${this.props.label}`)
    }

    render() {

        const { label, important = false } = this.props;

        const liStyle = {
            color: important ? "tomato" : "blac",
            fontWeight: important ? 'bold' : 'normal'
        }
         
        return (
            <div className="todo-list-item">
                <span 
                    className="todo-list-item-label"
                    style={liStyle}
                    onClick = { this.onLabelClick }>
                    {label}
                </span>
    
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right">
                    <i className="fa fa-exclamation" />
                </button>
    
                <button type="button"
                    className="btn btn-outline-danger btn-sm float-right">
                    <i className="fa fa-trash-o" />
                </button>
            </div>
        );
    }
}

export default TodoListItem;

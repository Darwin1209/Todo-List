import React from 'react';
import './TodoListItem.css'

class TodoListItem extends React.Component {
    
    state = {
        done: false,
        important: false,
    };

    onLabelClick = () => {
        if (this.state.done === false) {
            this.setState( { done: true } );
        } else {
            this.setState( { done: false } );
        }
    };

    onMarkImportant = () => {
        if (this.state.important === false) {
            this.setState( { important: true } );
        } else {
            this.setState( { important: false } )
        }
    }

    render() {

        const { label } = this.props;
        const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        } /*else {
            classNames -= ' done';
        }*/

        if (important) {
            classNames += ' important';
        }
         
        return (
            <div className={classNames}>
                <span 
                    className="todo-list-item-label"
                    onClick = { this.onLabelClick }>
                    {label}
                </span>
    
                <button type="button"
                    className="btn btn-outline-success btn-sm float-right"
                    onClick = {this.onMarkImportant}>
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

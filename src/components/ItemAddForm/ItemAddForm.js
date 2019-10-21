import React from 'react';

import './ItemAddForm.css';

class ItemAddForm extends React.Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onCreate(this.state.label);
    }

    render() {
        
        return (
            <form className="item-add-form d-flex"
                  onSubmit={ this.onSubmit }>
                <input type="text"
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Что Вы хотите сделать?" 
                />
                <button className="btn btn-outline-secondary btn-size"> 
                    Добавить задачу
                </button>
            </form>
        )
    }
}

export default ItemAddForm;
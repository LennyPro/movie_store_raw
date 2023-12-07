import React, { Component } from 'react';

class Counter extends Component {

    render() {
        return (
            <React.Fragment>

                <div className="row">

                    <div className='col-1'>
                        <span>{(this.props.value === 0) ? "Zero" : this.props.value}</span>
                    </div>
                    <div className="col">
                        <button type='button' onClick={() => this.props.onIncrement(this.props.counter)}>increment</button>

                        <button
                            type='button'
                            onClick={() => this.props.onDecrement(this.props.counter)}
                            disabled={this.props.counter.value === 0 ? "disabled" : ""}
                        >decrement
                        </button>

                        <button type='button' onClick={this.props.onDelete} >delete</button>

                    </div>

                </div>

            </React.Fragment>
        );
    }
}

export default Counter;
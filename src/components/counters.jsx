import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='m-4'>
                    <p>counters.jsx</p>
                    <button type='button' onClick={this.props.onReset}>reset</button>
                </div>

                {this.props.counters.map((counter) => {
                    return (
                        <Counter
                            key={counter.id}
                            counter={counter}
                            value={counter.value}
                            onDelete={() => this.props.onDelete(counter.id)}
                            onIncrement={() => this.props.onIncrement(counter)}
                            onDecrement={() => this.props.onDecrement(counter)}
                        />
                    );
                })}

            </React.Fragment>
        );
    }
}

export default Counters;
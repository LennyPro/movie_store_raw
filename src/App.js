import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import Movies from './components/movies';


class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 6 },
      { id: 3, value: 9 },
    ]
  }

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    })
    this.setState({ counters: counters });
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({
      counters: counters,
    })
  }

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({
      counters: counters,
    })
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((counter) => counter.id !== counterId);
    this.setState({ counters: counters });
  }

  render() {

    return (

      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter((c) => c.value > 0).length} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />

          <Movies />

        </main>

      </React.Fragment >
    );

  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      return {
        ...c,
        value: 0
      };
    });

    this.setState({ counters });
  };

  handleChange = (counter, value) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const newValue = value > -1 ? value : 0;
    counters[index] = { ...counter, value: newValue };
    this.setState({ counters });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(counter => id !== counter.id);
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={
            this.state.counters.filter(counter => counter.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onChange={this.handleChange}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

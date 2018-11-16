import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onChange, onDelete, onReset, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onChange={onChange}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

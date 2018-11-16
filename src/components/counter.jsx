import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onChange, counter } = this.props;
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onChange(counter, counter.value + 1)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onChange(counter, counter.value - 1)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            X
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    return `badge m-2 badge-${
      this.props.counter.value === 0 ? "warning" : "primary"
    }`;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

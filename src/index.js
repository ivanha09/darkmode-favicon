import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "Status"
    };
  }

  finished = () => {
    this.setState({
      status: "Finished"
    });
  };

  pending = () => {
    this.setState({
      status: "Pending"
    });
  };

  error = () => {
    this.setState({
      status: "Error"
    });
  };

  componentDidMount() {
    const favicon = document.getElementById("favicon");
    const dmQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (dmQuery.matches) {
      favicon.href = "favicon-dark.ico";
    }
  }

  componentDidUpdate() {
    const favicon = document.getElementById("favicon");
    const dmQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (this.state.status === "Finished") {
      if (dmQuery.matches) {
        favicon.href = "favicon-dark-finished.ico";
      } else {
        favicon.href = "favicon-finished.ico";
      }
    } else if (this.state.status === "Pending") {
      if (dmQuery.matches) {
        favicon.href = "favicon-dark-pending.ico";
      } else {
        favicon.href = "favicon-pending.ico";
      }
    } else if (this.state.status === "Error") {
      if (dmQuery.matches) {
        favicon.href = "favicon-dark-error.ico";
      } else {
        favicon.href = "favicon-error.ico";
      }
    } else {
      favicon.href = "favicon-status.ico";
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Change favicon Icon</h1>
        <h2>{this.state.status}</h2>
        <button className="btn btn-success" onClick={this.finished}>
          Clear
        </button>
        <button className="btn btn-warning" onClick={this.pending}>
          Running
        </button>
        <button className="btn btn-danger" onClick={this.error}>
          Issues
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

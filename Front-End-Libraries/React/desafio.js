// Write a React component from scratch
class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>My First React Component!</h1>
      </div>
    );
  }
}

ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));

// Revie using props with stateless functional components
class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper name={"CamperBot"} />
      </div>
    );
  }
}
const Camper = props => (
  <div>
    <p>{props.name}</p>
  </div>
);

Camper.propTypes = {
  name: PropTypes.string.isRequired
};

Camper.defaultProps = {
  name: "CamperBot"
};

// Write a simple counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.reset = this.reset.bind(this);
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
  }
  reset = () => {
    this.setState({ count: 0 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
}

// Create a controlled input
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  handleChange = event => {
    this.setState({ input: event.target.value });
  };
  render() {
    return (
      <div>
        <input
          value={this.state.input}
          onChange={this.handleChange.bind(this)}
        />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
}

// Controlled form
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      submit: this.state.input
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange} />
          <button type="submit">Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}

// Use componentWillMount method (execute before the render method)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("something");
  }
  render() {
    return <div />;
  }
}

// Use componentDidMount method (execute after the render method, useful to retrieve data from api)
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}

// Use componentDidMount method to add eventListener, remove on componentWillUnmount metho
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleEnter = () => {
    this.setState({
      message: this.state.message + "You pressed the enter key! "
    });
  };
  handleKeyPress = event => {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  };
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

// Manage update with lifecycle methods (componentWillUpdate, componentWillReceiveProps, componentDidUpdate)
class Dialog extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillUpdate() {
    console.log("Component is about to update...");
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidUpdate() {
    console.log("Component was updated!");
  }
  render() {
    return <h1>{this.props.message}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "First Message"
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState({
      message: "Second Message"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.changeMessage}>Update</button>
        <Dialog message={this.state.message} />
      </div>
    );
  }
}

// Optimize re-renders with shouldComponentUpdate
class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    return nextProps.value % 2 === 0;
  }
  componentWillReceiveProps(nextProps) {
    console.log("Receiving new props...");
  }
  componentDidUpdate() {
    console.log("Component re-rendered.");
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState({
      value: this.state.value + 1
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

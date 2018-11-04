// Render state in the user interface
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp"
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// Render state in the user interface another way
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "freeCodeCamp"
    };
  }
  render() {
    const { name } = this.state;
    return (
      <div>
        <h1>{name}</h1>
      </div>
    );
  }
}

// Set state with this.setState
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Initial State"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ name: "React Rocks!" });
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

// Bind 'this' to a class method
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    this.addItem = this.addItem.bind(this);
  }

  addItem = () => {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addItem}>Click Me</button>
        <h1>Current Item Count: {this.state.itemCount}</h1>
      </div>
    );
  }
}

// Use state to toggle an element
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility = () => {
    this.setState({ visibility: !this.state.visibility });
  };
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

// Pass state as props to child component
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot"
    };
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
      </div>
    );
  }
}

const Navbar = props => (
  <div>
    <h1>Hello, my name is: {props.name} </h1>
  </div>
);

// Pass a callback as props
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };
  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}

const GetInput = props => (
  <div>
    <h3>Get Input:</h3>
    <input value={props.input} onChange={props.handleChange} />
  </div>
);

const RenderInput = props => (
  <div>
    <h3>Input Render:</h3>
    <p>{props.input}</p>
  </div>
);

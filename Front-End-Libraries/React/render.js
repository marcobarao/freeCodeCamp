// Use advanced Javascript in React render method
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      randomIndex: ""
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask = () => {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ""
      });
    }
  };
  handleChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };
  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful"
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>{answer}</p>
      </div>
    );
  }
}

// Render with an if/else condition
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    });
  };
  render() {
    if (this.state.display) {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
          <h1>Displayed!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleDisplay}>Toggle Display</button>
        </div>
      );
    }
  }
}

// Use && for a more concise conditional
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay = () => {
    this.setState({
      display: !this.state.display
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleDisplay}>Toggle Display</button>
        {this.state.display && <h1>Displayed!</h1>}
      </div>
    );
  }
}

// Use a ternary expression
const inputStyle = {
  width: 235,
  margin: 5
};

class CheckUserAge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: "",
      input: ""
    };
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({
      input: e.target.value,
      userAge: ""
    });
  };
  submit = () => {
    this.setState({
      userAge: this.state.input
    });
  };
  render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h3>Enter Your Age to Continue</h3>
        <input
          style={inputStyle}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge >= 18
          ? buttonTwo
          : this.state.userAge == ""
            ? buttonOne
            : buttonThree}
      </div>
    );
  }
}

// Render conditionally from props
const Results = props => <h1>{props.fiftyFifty ? "You win!" : "You lose!"}</h1>;

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  render() {
    let expression = Math.random() > 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}

// Use Array.map() to dynamically render elements
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      toDoList: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit = () => {
    const itemsArray = this.state.userInput.split(",");
    this.setState({
      toDoList: itemsArray
    });
  };
  handleChange = e => {
    this.setState({
      userInput: e.target.value
    });
  };
  render() {
    const items = this.state.toDoList.map(item => <li>{item}</li>);
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas"
        />
        <br />
        <button onClick={this.handleSubmit}>Create List</button>
        <h1>My "To Do" List:</h1>
        <ul>{items}</ul>
      </div>
    );
  }
}

// Give siblings elemnts unique key attribute
const frontEndFrameworks = [
  "React",
  "Angular",
  "Ember",
  "Knockout",
  "Backbone",
  "Vue"
];

function Frameworks() {
  const renderFrameworks = frontEndFrameworks.map(item => (
    <li key={item}>{item}</li>
  ));
  return (
    <div>
      <h1>Popular Front End JavaScript Frameworks</h1>
      <ul>{renderFrameworks}</ul>
    </div>
  );
}

// Use Arra.filter() to dynamically filter an array
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: "Jeff",
          online: true
        },
        {
          username: "Alan",
          online: false
        },
        {
          username: "Mary",
          online: true
        },
        {
          username: "Jim",
          online: false
        },
        {
          username: "Sara",
          online: true
        },
        {
          username: "Laura",
          online: true
        }
      ]
    };
  }
  render() {
    const usersOnline = this.state.users.filter(user => user.online);
    const renderOnline = usersOnline.map(user => (
      <li key={user.username}>{user.username}</li>
    ));
    return (
      <div>
        <h1>Current Online Users:</h1>
        <ul>{renderOnline}</ul>
      </div>
    );
  }
}

// Render React on the server with renderToString
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div />;
  }
}

ReactDOMServer.renderToString(<App />);

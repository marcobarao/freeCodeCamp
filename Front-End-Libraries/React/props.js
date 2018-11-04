// Pass props to a stateless functional component
const CurrentDate = props => (
  <div>
    <p>The current date is: {props.date} </p>
  </div>
);

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
}

// Pass an array as props
const List = props => <p>{props.tasks.join(", ")}</p>;

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["walkdog", "workout"]} />
        <h2>Tomorrow</h2>
        <List tasks={["walkdog", "workout", "work"]} />
      </div>
    );
  }
}

// Use default props
const ShoppingCart = props => (
  <div>
    <h1>Shopping Cart Component</h1>
  </div>
);

ShoppingCart.defaultProps = { items: 0 };

// Override default props
const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items quantity={10} />;
  }
}

// Use propTypes to define the props you expect
const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = {
  quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />;
  }
}

// Access props using this.props on stateless class components
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          Your temporary password is: <strong>{this.props.tempPassword}</strong>
        </p>
      </div>
    );
  }
}

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        <ReturnTempPassword tempPassword={"123456789"} />
      </div>
    );
  }
}

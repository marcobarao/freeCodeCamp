// Create a simple JSX element
const JSX = <h1>Hello JSX!</h1>;

// Create a complex JSX element
const JSX = (
  <div>
    <h1>JSX</h1>
    <p>JSX is cool</p>
    <ul>
      <li>Don't forget the parent element</li>
      <li>Because it's required</li>
      <li>If it isn't exist the JSX will no longer transpile</li>
    </ul>
  </div>
);

// Comment texts on JSX elements
const JSX = (
  <div>
    {/* This is a comment */}
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);

// Define HTML class on JSX
const JSX = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);

// Learn about Self-Closing JSX Tags
const JSX = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);

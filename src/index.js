/**
 * Import The React and ReactDOM libraries
 */

import React from "react";
import ReactDOM from "react-dom";

/**
 * Create a react component
 */
const App = () => {
  const buttonProperties = {
    styling: { backgroundColor: "blue", color: "white" },
    value: "Click me!"
  };
  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={buttonProperties.styling}>{buttonProperties.value}</button>
    </div>
  );
};

/**
 * Take a react component and show it on the screen
 */

ReactDOM.render(<App />, document.getElementById("root"));

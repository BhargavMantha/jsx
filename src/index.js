/**
 * Import The React and ReactDOM libraries
 */

import React from "react";
import ReactDOM from "react-dom";
function buttonClickHandler() {
  return "Click Me";
}
/**
 * Create a react component
 */
const App = () => {
  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonClickHandler()}
      </button>
    </div>
  );
};

/**
 * Take a react component and show it on the screen
 */

ReactDOM.render(<App />, document.getElementById("root"));

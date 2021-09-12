/**
 * Import The React and ReactDOM libraries
 */

import React from "react";
import ReactDOM from "react-dom";

/**
 * Create a react component
 */
const App = () => {
  return <div>Hi There!!</div>;
};

/**
 * Take a react component and show it on the screen
 */

ReactDOM.render(<App />, document.getElementById("root"));

import "./App.css";
import React from "react";
import LoginPage from "./loginPage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  // constructor() {
  //   super();
  // }

  render() {
    return (
      <div className="App">
        <div>
          <LoginPage />
        </div>
      </div>
    );
  }
}

export default App;

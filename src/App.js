import React from "react";
// import Nav from "./components/Nav";
import Router from "./routes/Router";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Nav /> */}
        <Router />
      </div>
    );
  }
}

export default App;

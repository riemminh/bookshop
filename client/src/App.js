import React, { Component } from "react";
import { Provider } from "react-redux";
import "./App.scss";
import store from "./store";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
        </div>
      </Provider>
    );
  }
}

export default App;

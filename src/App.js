import React, { Component } from "react";
import "./bulma.css";

import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <Form />
        </div>
      </section>
    );
  }
}

export default App;

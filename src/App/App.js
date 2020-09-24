import React, { Component } from 'react';
import './App.scss';
import Head from "./components/Head";
import StudentList from "./components/StudentList";

class App extends Component {
    render() {
    return (
      <div data-testid="app" className="App">
        <Head />
        <StudentList />
      </div>
    );
  }
}

export default App;

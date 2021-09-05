import "./App.scss";
import "./main.scss";
import React from "react";
import { dataTasks } from "./dataTask";
import { Sidebar } from "./Components/Sidebar/Sidebar";

class App extends React.Component {
  state = dataTasks;

  render() {
    return (
      <div>
        <Sidebar />
      </div>
    );
  }
}

export default App;

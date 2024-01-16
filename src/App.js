// App.js
import React, { useState } from "react";
import AppContext from "./Context";
import ExampleComponent from "./ExampleComponent";

function App() {
  const [data, setData] = useState("Initial Data");

  return (
    <AppContext.Provider value={{ data, setData }}>
      <div className="App">
        <h1>Context API Demo</h1>
        <ExampleComponent />
      </div>
    </AppContext.Provider>
  );
}

export default App;

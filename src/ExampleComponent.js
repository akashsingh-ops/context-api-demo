// ExampleComponent.js
import React, { useContext } from "react";
import AppContext from "./Context";

const ExampleComponent = () => {
  const { data, setData } = useContext(AppContext);

  return (
    <div>
      <p>{data}</p>
      <button onClick={() => setData("New Data")}>Change Data</button>
    </div>
  );
};

export default ExampleComponent;

import React, { useState } from "react";
import ReactDOM from "react-dom";
import SidePane from "react-sliding-pane";
import "./styles.css";
import "react-sliding-pane/dist/react-sliding-pane.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <h1
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Hello CodeSandbox
      </h1>
      <h2>Start editing to see some magic happen!</h2>
      <SidePane
        closeIcon={<div>关闭</div>}
        isOpen={isOpen}
        width="303px"
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <div>test</div>
      </SidePane>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

import React from "react";
import ReactDOM from "react-dom/client";

const name = "my name"
const renderdom = React.createElement("h1",{
  style:{color:'red'}
},name)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(renderdom)
import React from 'react';
import ReactDOM from 'react-dom/client';

// const fruit =  ["Apple", "Banana", "Orange", "Apricot", "Black rowan", "Cranberry"];
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <div>
//     <h1>list of fruit</h1>
//     <ul>
//       {fruit.map((item)=>(
//         <li>{item}</li>
//       ))}
//     </ul>
//   </div>
// )

// thực hành hiển thị thời gian hiện tại
//  const root = ReactDOM.createRoot(document.getElementById('root'))
//  const reder = ()=>{ root.render(
//   <div>
//     <h1>hello, word</h1>
//     <b>it is {new Date().toLocaleTimeString()}</b>
//   </div>
//  )}
//  setInterval(reder,1000)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div>Browser's details: {navigator.userAgent}</div>
)
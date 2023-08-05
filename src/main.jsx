// import React from "react";
// import ReactDOM from "react-dom/client";

// import App from "./App";
// import "./index.css";
// import store from "./redux/store";
// import { Provider } from "react-redux";
// // import { Router } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </Provider>
// );

import React from "react";

import ReactDOM from "react-dom";

import App from "./App";

import "./index.css";

import store from "./redux/store";

import { Provider } from "react-redux";

// import { Router } from 'react-router-dom'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,

  document.getElementById("root")
);

reportWebVitals();

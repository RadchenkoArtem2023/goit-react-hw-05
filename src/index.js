import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// );

const appRoot = root.createRoot();
appRoot.render(
  <Router>
    <App />
  </Router>
);

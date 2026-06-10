import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

// function MyApp() {
//   return (
//     <div>
//       <h1>Custom React !Prakhar</h1>
//     </div>
//   );
// }
// const root = createRoot(document.getElementById("root"));
// root.render(<MyApp />);

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

// JSX element stored in a variable.
// React will render this anchor tag on the page.
const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// Find the root DOM node and render the JSX element into it.
// This is the entry point where React mounts UI to the page.
ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);

// const anotherUser = "Chai aur React";


//It is injected by babel
// const reactElement = React.createElement(
//   "a",
//   {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   "Click me to visit Google",
//   anotherUser,
// );

// createRoot(document.getElementById("root")).render(reactElement);

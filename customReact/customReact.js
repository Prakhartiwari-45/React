function customRender(reactElement, container) {
  // Create a real DOM element that matches the type stored in the React-like object.
  // For example, if reactElement.type is "a", this creates an <a> tag.
  const domElement = document.createElement(reactElement.type);

  // Insert the element's visible content.
  // In this simple example, children is a plain string, so innerHTML works well.
  domElement.innerHTML = reactElement.children;

  // domElement.setAttribute('href',reactElement.props.href);
  // domElement.setAttribute('target',reactElement.props.target);

  // Copy every property from props onto the DOM node as an attribute.
  // This keeps the renderer generic instead of hard-coding attributes like href or target.
  for (const prop in reactElement.props) {
    // if (prop === "children") continue;//earlier it was necessary
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  // Append the fully configured element to the container element.
  container.appendChild(domElement);

  // Compact version of the same logic:
  // const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML = reactElement.children
  // for (const prop in reactElement.props) {
  //   if (prop === 'children') continue
  //   domElement.setAttribute(prop, reactElement.props[prop])
  // }
  // container.appendChild(domElement)  
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  // The text users will see and click inside the link.
  children: "Click me to visit Google",
};
// Get the root element from the HTML document where the output should appear.
const mainContainer = document.getElementById("root");

// Convert the JavaScript object into an actual DOM element and render it.
customRender(reactElement, mainContainer);

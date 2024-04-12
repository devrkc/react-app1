const reactHeadingElem = React.createElement(
  "h1",
  { id: "heading", xyz: "test" }, //attribute - part of props
  "Hello from React Element" //childeren - part of props
); //object creation for nested HTML structure is a tedius task, to solve jSX came into picture
console.log(reactHeadingElem); //javascript object not h1 tag

//JSX - to solve problem of React element object creation for complex html structure

const reactRoot = ReactDOM.createRoot(document.getElementById("container"));

reactRoot.render(reactHeadingElem);


const parent = React.createElement("div", {id:'parent'}, React.createElement("div", {id:'child'},[ React.createElement("h1", {id:'heading'}, "I am h1"),React.createElement("h2", {id:'heading'}, "I am h2 tag")]));
const heading = React.createElement("h1", {id:'heading'}, "Hello world");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
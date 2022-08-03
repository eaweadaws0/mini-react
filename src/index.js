import React from "./React";

const { render, Component } = React;

const virtualDom = (
  <div className={"wrapper"}>
    <h1>Hello World</h1>
    <button onClick={() => console.log(111)}>click me</button>
    <p>
      This i s a paragraph
      {1 === 1 && 123}
    </p>
    {2 === 1 && <span>不该出现</span>}
    12333
  </div>
);

const Footer = ({ name }) => <span className={"luff"}>my name is {name}</span>;

const Header = () => {
  return <Footer name={"luff"} />;
};

class Alert extends Component {
  render() {
    return <div>Hello React</div>;
  }
}

render(<Alert />, document.getElementById("root"));

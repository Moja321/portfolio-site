import logo from "../../logo.svg";
import "../sass/style.css";

function Header(props) {
  return (
    <header className="App-header">
      {/* <img src={props.image.url} className="App-logo" alt="logo" /> */}
      {/* <h1>Hello World! I ❤️ React!</h1> */}
      <h1 className="header-title">UMAR ROSHIDI</h1>
      <h4>WEB DEVELOPER</h4>
    </header>
  );
}

export default Header;

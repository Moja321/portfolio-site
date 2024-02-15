import logo from "../../logo.svg";
import "../sass/style.css";
import DarkMode from "../darkmode/darkmode";
import "../../wavy.css";

function Header(props) {
  return (
    <header className="App-header">
      {/* <img src={props.image.url} className="App-logo" alt="logo" /> */}
      {/* <h1>Hello World! I ❤️ React!</h1> */}
      <DarkMode />
      <div className="waviy">
        <span >UMAR ROSHIDI</span>
        {/* <span >I</span>
        <span >Y</span>
        <span >O</span>
        <span >V</span>
        <span >U</span>
        <span >D</span>
        <span >D</span>
        <span >I</span>
        <span >N</span> */}
      </div>
      
      {/* <h1 className="header-title">UMAR ROSHIDI</h1> */}
      <h4>WEB DEVELOPER</h4>
    </header>
  );
}

export default Header;

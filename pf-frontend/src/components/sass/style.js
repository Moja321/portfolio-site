//Main features of Sass
//Variables
//Nesting
//Mix-ins

import "./style.css";

export const SassComponent = () => {
  return (
    <div className="" style={{ height: "100vh", marginTop: "200px" }}>
      <h1>This is a variable example</h1>
      <div id="nested">
        <h3>This is a nested rules example</h3>
      </div>
      <p className="interpolation">Interpolation example</p>
      <p className="secondInterpolation">Second interpolation example</p>
      <div id="function-example">
        <h3>This is a function example</h3>
      </div>
      <div id="mixin-example">
        <p>This is a mixin example</p>
      </div>
    </div>
  );
};

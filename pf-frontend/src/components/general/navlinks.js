import { Link } from "react-router-dom";

const Navlink = () => {
  return (
    <div className="nav container nav1">
      <Link className="nav-link p-3" to="/">
        <div>Projects</div>
      </Link>
      <Link className="nav-link p-3" to="/about">
        <div>About</div>
      </Link>
      <Link className="nav-link p-3" to="/contact">
        <div>Contact</div>
      </Link>
      {/* <Link className='nav-link p-3' to='/restaurant'>
                <div>Restaurant List</div>
            </Link>
            <Link className='nav-link p-3' to='/twitter'>
                <div>Mini twitter</div>
            </Link>
            <Link className='nav-link p-3' to='/pushup'>
                <div>Pushup counter</div>
            </Link>
            <Link className='nav-link p-3' to='/datefact'>
                <div>Date facts</div>
            </Link> */}
    </div>
  );
};

export default Navlink;

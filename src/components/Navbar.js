import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { NavLink } from 'react-router-dom';
import planet from '../imgs/planet.png';

const Navbar = () => (
  <nav className="navBar navbar-expand-lg p-4 border border-bottom bg-white">
    <div className="container-fluid">
      <div>
        <div>
          <div className="d-flex align-items-center">
            <div className="ms-5 logo-nav">
              <span className="me-4">
                <img className="img-logo" src={planet} alt="logo" />
              </span>
              <span className="title-nav">Space Traveler&apos;s Hub</span>
            </div>
            <div>
              <NavLink
                to="/rockets"
              >
                <h2 className="links-nav">Rockets</h2>
              </NavLink>
            </div>
            <div>
              <NavLink
                to="/"
              >
                <h2 className="links-nav">Missions</h2>
              </NavLink>
            </div>
            <div className="mb-1">|</div>
            <div>
              <NavLink
                to="/myProfile"
              >
                <h2 className="links-nav">My Profile</h2>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

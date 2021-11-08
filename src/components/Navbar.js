import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar navbar-expand-lg p-4 border border-bottom bg-white">
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-sm-6 p-3">
                <span className="blu monB titl">Space Traveler&apos;s Hub</span>
              </div>
              <div className="col-sm-2 monR linkNav align-padding">
                <NavLink
                  className={(isActive) => `nav-link ${!isActive ? 'unselected' : ''}`}
                  to="/"
                >
                  Missions
                </NavLink>
              </div>
              <div className="col-sm-2 monR linkNav align-padding">
                <NavLink
                  className={(isActive) => `nav-link ${!isActive ? 'unselected' : ''}`}
                  to="/rockets"
                >
                  Rockets
                </NavLink>
              </div>
              <div className="col-sm-2 monR linkNav align-padding">
                <NavLink
                  className={(isActive) => `nav-link ${!isActive ? 'unselected' : ''}`}
                  to="/myProfile"
                >
                  My Profile
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

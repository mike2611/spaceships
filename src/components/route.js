import {
  BrowserRouter as Router, NavLink, Switch, Route,
} from 'react-router-dom';

const Route = () => (
  <Router>
    <NavLink
      className={(isActive) => `nav-link ${!isActive ? 'unselected' : ''}`}
      to="/"
    >
      Misions
    </NavLink>
    <NavLink
      className={(isActive) => `nav-link ${!isActive ? 'unselected' : ''}`}
      to="/rockets"
    >
      Rockets
    </NavLink>
    <NavLink
      className={(isActive) => `nav-link ${!isActive ? 'unselected' : ''}`}
      to="/myProfile"
    >
      My Profile
    </NavLink>
  </Router>
);

export default (Route);

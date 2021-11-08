import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './Navbar';

const Routing = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" />
      <Route path="/rockets" />
      <Route path="/myProfile" />
    </Routes>
  </Router>
);

export default (Routing);

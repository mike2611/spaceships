import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './Navbar';
import Missions from './Missions';

const Routing = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Missions />} />
      <Route path="/rockets" />
      <Route path="/myProfile" />
    </Routes>
  </Router>
);

export default (Routing);

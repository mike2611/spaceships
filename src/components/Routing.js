import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './Navbar';
import Missions from './Missions';
import Rocket from './Rockets';

const Routing = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Missions />} />
      <Route path="/rockets" element={<Rocket />} />
      <Route path="/myProfile" />
    </Routes>
  </Router>
);

export default (Routing);

import {
  BrowserRouter as Router, Routes,
} from 'react-router-dom';
import { Route } from 'react-router';
import Navbar from './Navbar';
import Misions from './Misions';

const Routing = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Misions />} />
      <Route path="/rockets" />
      <Route path="/myProfile" />
    </Routes>
  </Router>
);

export default (Routing);

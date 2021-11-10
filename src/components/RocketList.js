import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import './rocket.css';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { getRockets } from '../redux/rockets/rockets';
import PropTypes from 'prop-types';

const RocketList = (props) => {
  // const dispatch = useDispatch();
  const {
    rocketName, description, flickrImages,
  } = props;
  return (
    <div className="container p-4">
      <div className="row">
        <div className="col-sm-4">
          <img src={flickrImages} alt="user" className="rocketImage" />
        </div>
        <div className="col-sm-8">
          <div className="row">
            <h3>
              {rocketName}
            </h3>
          </div>
          <div className="row">
            {description}
          </div>
          <div className="row">
            <button type="button" className="btn btn-primary col-sm-4">RESERVE ROCKET</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketList;

RocketList.propTypes = {
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
};

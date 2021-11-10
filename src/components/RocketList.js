import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
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
    <div className="container">
      <div className="row">
        <div className="col-sm-4">
          <img src={flickrImages} alt="user" className="userImage" />
        </div>
        <div className="col-sm-8">
          <div className="row">
            {rocketName}
            {description}
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

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import './rocket.css';
import React from 'react';
import PropTypes from 'prop-types';

const RocketList = (props) => {
  const {
    rocketID, rocketName, description, flickrImages, reserved,
  } = props;

  if (rocketName === 'rocketName' && description === 'Rocket description' && flickrImages === 'Images') {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-sm-4" />
          <div className="col-sm-8">
            <h2>
              Loading
            </h2>
          </div>
        </div>
      </div>
    );
  }
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
            <span>
              { reserved === 'true'
                ? <button type="button" className="badge badge-info col-sm-2 p-1">Reserved </button>
                : '' }
              { description }
            </span>
          </div>
          <div className="row">
            { reserved === 'true'
              ? <button type="button" className="btn btn-outline-secondary col-sm-4" value={rocketID}>CANCEL RESERVATION</button>
              : <button type="button" className="btn btn-primary col-sm-4" value={rocketID}>RESERVE ROCKET</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketList;

RocketList.propTypes = {
  rocketID: PropTypes.string.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImages: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

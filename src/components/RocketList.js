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
    id, rocketName, description, images,
  } = props;

  return (
    <div>
      <div>
        <div>
          {id}
        </div>
        <div>
          {rocketName}
          {description}
          {images}
        </div>
      </div>
    </div>
  );
};

export default RocketList;

RocketList.propTypes = {
  id: PropTypes.number.isRequired,
  rocketName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
};

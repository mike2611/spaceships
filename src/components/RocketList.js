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
    id, /* rocket_name, */ description, /* flickr_images, */
  } = props;

  return (
    <div>
      <div>
        <div>
          {id}
        </div>
        <div>
          {description}
        </div>
      </div>
    </div>
  );
};

export default RocketList;

RocketList.propTypes = {
  id: PropTypes.string.isRequired,
  // rocket_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  // flickr_images: PropTypes.string.isRequired,
};

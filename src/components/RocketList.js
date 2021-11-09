import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';

const RocketList = (props) => {
  const {
    id, description,
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
  description: PropTypes.string.isRequired,
};

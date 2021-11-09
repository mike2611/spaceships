import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketlist = useSelector((state) => state.rocketsReducer);
  const rockets = rocketlist;
  console.log(rockets);
  return (
    <div>
      <div>
        <div>
          rockets
        </div>
      </div>
    </div>
  );
};

export default Rocket;

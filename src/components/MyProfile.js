import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsReducer';
import { getRockets } from '../redux/rockets/rockets';

const MyProfile = () => {
  let missions = [];
  let rockets = [];
  missions = useSelector((state) => state.misionsReducer);
  rockets = useSelector((state) => state.rocketsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0 && rockets.length === 0) {
      dispatch(getMissions());
      dispatch(getRockets());
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <h1>My Missions</h1>
          <ul className="list-group">
            {missions.filter((mission) => mission[1].reserved === true).map((filteredMision) => (
              <li className="list-group-item" key={`${filteredMision[0].mission_id}filtered`}>
                {filteredMision[0].mission_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-6">
          <h1>My Rockets</h1>
          <ul className="list-group">
            {rockets.filter((rocket) => rocket[1].reserved === true).map((finalRocket) => (
              <li className="list-group-item" key={`${finalRocket[0].rocket_id}filtered`}>
                {finalRocket[0].rocket_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default (MyProfile);

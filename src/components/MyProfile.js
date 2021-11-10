import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsReducer';

const MyProfile = () => {
  let missions = [];
  missions = useSelector((state) => state.misionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div className="container w-25">
      <h1>My Missions</h1>
      <ul className="list-group">
        {missions.filter((mission) => mission[1].reserved === true).map((filteredMision) => (
          <li className="list-group-item" key={`${filteredMision[0].mission_id}filtered`}>
            {filteredMision[0].mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default (MyProfile);

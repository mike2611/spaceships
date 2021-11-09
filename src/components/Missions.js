import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsReducer';
import Mission from './Mission';

const Misions = () => {
  let missions = [];
  missions = useSelector((state) => state.misionsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div>
      <h1>Missions Info</h1>
      {missions.map((mission) => (
        <Mission
          key={`${mission.mission_id}`}
          missionId={`${mission.mission_id}`}
          missionName={`${mission.mission_name}`}
          description={`${mission.description}`}
        />
      ))}
    </div>
  );
};

export default (Misions);

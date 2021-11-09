import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missionsReducer';

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
        `ID: ${mission.mission_id} Name: ${mission.mission_name}`
      ))}
    </div>
  );
};

export default (Misions);

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
    <div className="d-flex justify-content-center">
      <div className="mission-container mt-4">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col"><h2>Mission</h2></th>
              <th scope="col"><h2>Description</h2></th>
              <th scope="col"><h2>Status</h2></th>
              <th scope="col"> </th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <Mission
                key={`${mission.mission_id}`}
                missionId={`${mission.mission_id}`}
                missionName={`${mission.mission_name}`}
                description={`${mission.description}`}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default (Misions);
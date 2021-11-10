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
    <>
      <h1>My Missions</h1>
      <ul className="list-group">
        <li className="list-group-item">Example</li>
      </ul>
    </>
  );
};

export default (MyProfile);

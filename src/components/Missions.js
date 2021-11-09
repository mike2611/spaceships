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
  console.log(missions);

  return (
    <div>
      prueba
    </div>
  );
};

export default (Misions);

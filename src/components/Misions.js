import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMisions } from '../redux/misions/misionsReducer';

const Misions = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.misionsReducer);

  useEffect(() => {
    dispatch(getMisions());
  }, []);

  const misions = selector;
  console.log(misions);
};

export default (Misions);

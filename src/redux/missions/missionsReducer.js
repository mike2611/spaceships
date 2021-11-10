import axios from 'axios';

const misionsURL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spaceships/misions/GET_MISSIONS';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  try {
    const response = await axios.get(misionsURL);
    const misionsList = response.data;
    dispatch({
      type: GET_MISSIONS,
      payload: misionsList,
    });
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default (reducer);

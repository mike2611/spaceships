import axios from 'axios';

const misionsURL = 'https://api.spacexdata.com/v3/missions';
const GET_MISIONS = 'spaceships/misions/GET_MISSIONS';

const initialState = [];

export const getMisions = () => async (dispatch) => {
  try {
    const response = await axios.get(misionsURL);
    const misionsList = response.data;
    dispatch({
      type: GET_MISIONS,
      payload: misionsList,
    });
  } catch (error) {
    console.log(error);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISIONS:
      return action.payload;
    default:
      return state;
  }
};

export default (reducer);

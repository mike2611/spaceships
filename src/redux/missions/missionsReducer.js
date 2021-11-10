import axios from 'axios';

const misionsURL = 'https://api.spacexdata.com/v3/missions';
const GET_MISSIONS = 'spaceships/misions/GET_MISSIONS';
const JOIN_MISSION = 'spaceships/misions/JOIN_MISSON';

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

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MISSIONS:
      return action.payload.map((mission) => ([mission, { reserved: false }]));
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission[0].mission_id !== action.payload) {
          return mission;
        }
        return Object.assign([mission[0], { reserved: true }]);
      });
    default:
      return state;
  }
};

export default (reducer);

import axios from 'axios';

const GET_ROCKETS_SUCCESS = 'GET_ROCKETS_SUCCESS';
const API_URL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];
export const getRockets = () => async (dispatch) => {
  await axios.get(API_URL, {
    method: 'GET',
  })
    .then((response) => {
      dispatch({
        type: GET_ROCKETS_SUCCESS,
        payload: response,
      });
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
export default reducer;

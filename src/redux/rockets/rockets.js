import axios from 'axios';

const GET_ROCKETS_SUCCESS = 'GET_ROCKETS_SUCCESS';
const BOOK_ROCKET = 'BOOK_ROCKET';
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

export const bookRocket = (payload) => ({
  type: BOOK_ROCKET,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS_SUCCESS:
      return action.payload.data.map((state) => ([state, { reserved: false }]));
    case BOOK_ROCKET:
      return state.map((rocket) => {
        if (rocket[0].rocket_id !== action.payload) {
          return rocket;
        }
        return Object.assign([rocket[0], { reserved: true }]);
      });
    default:
      return state;
  }
};
export default reducer;

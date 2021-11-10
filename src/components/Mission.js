import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/missions/missionsReducer';

const Mission = (props) => {
  const dispatch = useDispatch();

  const enterMission = (e) => {
    dispatch(joinMission(e.target.value));
  };

  const {
    missionId,
    missionName,
    description,
  } = props;

  return (
    <tr>
      <th scope="row" className="align-top">
        <h2 className="mission-name">{missionName}</h2>
      </th>
      <th>{description}</th>
      <th className="align-middle">
        <button className="member-btn not-member" type="button">
          NOT A MEMBER
        </button>
      </th>
      <th className="align-middle">
        <button className="join-btn not-join" type="button" value={missionId} onClick={enterMission}>
          Join Mission
        </button>
      </th>
    </tr>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default (Mission);

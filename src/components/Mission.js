import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsReducer';

const Mission = (props) => {
  const dispatch = useDispatch();

  const {
    missionId,
    missionName,
    description,
    reserved,
  } = props;

  const joinLeaveMission = (e) => {
    if (reserved === 'false') {
      dispatch(joinMission(e.target.value));
    } else {
      dispatch(leaveMission(e.target.value));
    }
  };

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
        <button className={reserved === 'true' ? 'join-btn join' : 'join-btn not-join'} type="button" value={missionId} onClick={joinLeaveMission}>
          {reserved === 'true' ? 'Leave Mission' : 'Join Mission'}
        </button>
      </th>
    </tr>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default (Mission);

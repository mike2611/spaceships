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
    reserved,
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
        <button className={reserved === 'true' ? 'join-btn join' : 'join-btn not-join'} type="button" value={missionId} onClick={enterMission}>
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

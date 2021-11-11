import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    missionId,
    missionName,
    description,
    reserved,
  } = props;

  return (
    <table>
      <tbody>
        <tr>
          <th scope="row" className="align-top">
            <h2 className="mission-name">{missionName}</h2>
          </th>
          <th>{description}</th>
          <th className="align-middle">
            <div className={reserved === 'true' ? 'd-flex justify-content-center member-badge member'
              : 'd-flex justify-content-center member-badge not-member'}
            >
              {reserved === 'true' ? 'ACTIVE MEMBER' : 'NOT A MEMBER'}
            </div>
          </th>
          <th className="align-middle">
            <button className={reserved === 'true' ? 'join-btn join' : 'join-btn not-join'} type="button" value={missionId}>
              {reserved === 'true' ? 'Leave Mission' : 'Join Mission'}
            </button>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default (Mission);

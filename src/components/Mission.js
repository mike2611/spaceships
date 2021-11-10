import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
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
        <button className="join-btn not-join" type="button">
          Join Mission
        </button>
      </th>
    </tr>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default (Mission);

import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    missionName,
    description,
  } = props;

  return (
    <tr>
      <th scope="row"><h2 className="btn mission-name">{missionName}</h2></th>
      <th>{description}</th>
      <th className="align-middle">
        <button className="not-member-btn" type="button">
          NOT A MEMBER
        </button>
      </th>
      <th className="align-middle">
        <button className="join-mission-btn" type="button">
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

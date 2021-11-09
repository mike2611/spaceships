import PropTypes from 'prop-types';

const Mission = (props) => {
  const {
    missionId,
    missionName,
    description,
  } = props;

  return (
    <>
      <p>{missionId}</p>
      <p>{missionName}</p>
      <p>{description}</p>
    </>
  );
};

Mission.propTypes = {
  missionId: PropTypes.string.isRequired,
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default (Mission);

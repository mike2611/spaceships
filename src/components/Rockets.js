import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import './rocket.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketList from './RocketList';
import { getRockets } from '../redux/rockets/rockets';

const Rocket = () => {
  const rocketArr = [];
  const dispatch = useDispatch();

  useEffect(() => {
    if (rocketArr.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  const rocketlist = useSelector((state) => state.rocketsReducer);
  const rockets = rocketlist;
  Object.entries(rockets).map((rocket) => (
    rocketArr.push(rocket[1])
  ));
  useEffect(() => {
    if (rocketArr.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <div>
      <div>
        <div>
          { rockets !== 0
            ? rockets.map((rocket) => (
              <RocketList
                key={`${rocket[0].id}`}
                rocketID={`${rocket[0].rocket_id}`}
                rocketName={`${rocket[0].rocket_name}`}
                description={`${rocket[0].description}`}
                flickrImages={`${rocket[0].flickr_images}`}
                reserved={`${rocket[1].reserved}`}
              />
            ))
            : (
              <RocketList key="key" rocketName="rocketName" description="Rocket description" flickrImages="Images" />
            )}
        </div>
      </div>
    </div>
  );
};

export default Rocket;

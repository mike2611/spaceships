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
    dispatch(getRockets());
  }, []);

  const rocketlist = useSelector((state) => state.rocketsReducer);
  const rockets = rocketlist;
  console.log(rocketlist);
  Object.entries(rockets).map((rocket) => (
    rocketArr.push(rocket[1])
  ));
  const rocketInfo = rocketArr[0];
  useEffect(() => {
    if (rocketArr.length === 0) {
      dispatch(getRockets());
    }
  }, []);
  return (
    <div>
      <div>
        <div>
          { rocketInfo !== undefined
            ? rocketInfo.map((rocket) => (
              <RocketList
                key={`${rocket.id}`}
                rocketName={`${rocket.rocket_name}`}
                description={`${rocket.description}`}
                flickrImages={`${rocket.flickr_images}`}
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

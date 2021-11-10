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

  /* Object.entries(rockets).forEach((element) => {
    console.log('element', element);
    // console.log('data', element.data);
    /* const [key, value] = element;
    console.log('key', key);
    console.log('value', value);
    // console.log('value1', value[1]);
    rocketArr.push(value[1].forEach((item) => (
      console.log(item)
    )));
    // rocketArr.push(value);
  }); */
  Object.entries(rockets).map((rocket) => (
    // console.log(rocket[1])
    // console.log(typeof rocket[1])
    rocketArr.push(rocket[1])
  ));
  const rocketInfo = rocketArr[0];
  console.log(rocketInfo);
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

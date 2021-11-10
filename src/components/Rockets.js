import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RocketList from './RocketList';
import { getRockets } from '../redux/rockets/rockets';

const Rocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketArr = [];
  const rocketlist = useSelector((state) => state.rocketsReducer);
  const rockets = rocketlist;
  // console.log(rockets);

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
  return (
    <div>
      <div>
        <div>
          { rocketInfo.map((rocket) => (
            <RocketList
              key={`${rocket.id}`}
              id={`${rocket.id}`}
              rocketName={`${rocket.rocket_name}`}
              description={`${rocket.description}`}
              images={`${rocket.flickr_images}`}
            />
          )) }
        </div>
      </div>
    </div>
  );
};

export default Rocket;

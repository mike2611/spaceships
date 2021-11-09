import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import RocketList from './RocketList';
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

  Object.entries(rockets).forEach((element) => {
    const [key, value] = element;
    console.log('key', key);
    console.log('value', value);
    /* rocketArr.push(value.map((item) => (
      console.log('item', item)
    ))); */
  });
  return (
    <div>
      <div>
        <div>
          {rocketArr}
          hi
        </div>
      </div>
    </div>
  );
};

export default Rocket;

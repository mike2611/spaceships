import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';

const Rocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const rocketArr = [];
  const rocketlist = useSelector((state) => state.rocketsReducer);
  const rockets = rocketlist;
  console.log(rockets);
  return (
    <div>
      <div>
        <div>
          {rocketArr}
        </div>
      </div>
    </div>
  );
};

export default Rocket;

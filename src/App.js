import './App.css';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';
import Routing from './components/Routing';

function App() {
  const store = configureStore;
  return (
    <Provider store={store}>
      <div>
        <Routing />
      </div>
    </Provider>
  );
}

export default App;

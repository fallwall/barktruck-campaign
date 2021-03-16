import logo from './assets/logo.svg';
import background from './assets/background.svg';
import { Route, Link } from 'react-router-dom';
import Insta from './displays/Insta';
import BizCard from './displays/BizCard';
import Menu from './displays/Menu';

import './App.css';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <div className="Header">
        <img src={logo} alt="logo of BarkTruck" />
      </div>
      <div className="Navigation">just some randm nav thing</div>
      <div className="Display">
        <Route exact path="/" render={() => <Insta />} />
        <Route path="/insta" render={() => <Insta />} />
        <Route path="/bizcard" render={() => <BizCard />} />
        <Route path="/menu" render={() => <Menu />} />
      </div>
    </div>
  );
}

export default App;

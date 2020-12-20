import './App.css';
import Nav from './Nav';
import Home from './Home';
import Stuff from './Stuff';
import Form from './Form';
import ImgSlider from './components/ImageSlider';
import SliderData, { slider_data } from './components/SliderData';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/stuff" component={Stuff}/>
      <Route path="/imgslider" component={ImgSlider}/>
      <Form />
      <ImgSlider slides={slider_data}/>
      </Switch>
    </div>
    </Router>
  );
}



export default App;

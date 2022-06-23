import logo from './logo.svg';
import { Link, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './App.css';
import About from './exercise/pages/About';
import Home from './exercise/pages/Home';
import MyNavLink from './exercise/components/MyNavLink';

function App() {
  return (
    <div className="App">
      <header >

      </header>

      <div>

        {/* <Link to="/about"> about</Link>
        <Link to="/home">home</Link> */}
        {/* <NavLink to="/about"> about</NavLink>
        <NavLink to="/home">home</NavLink> */}
        <MyNavLink to="/about" >about</MyNavLink>
        <MyNavLink to="/home" >home</MyNavLink>


      </div>
      <div style={{ background: "green" }}>
        <h1>现在</h1>
        {/* <Switch> */}
        <Route path="/about" component={About} />
        <Route path="/home" component={Home} />
        <Redirect to="/about" />
        {/* </Switch> */}
      </div>

    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './bootstrap.min.css';

import Home from './components/Home';
import List from './components/List';
import Add from './components/Add';
import Update from './components/Update';
import {Switch,Route,Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-3">
      <div className="container">
  <Link className="navbar-brand" to="/home">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">      
      <li className="nav-item">
        <Link className="nav-link" to="/list">Employee</Link>
      </li>
     
    </ul>
  </div>
  </div>
</nav>      
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}  exact />
        <Route path="/add" component={Add} />
        <Route path="/update/:id" component={Update} />
        <Redirect from="/list" to="/add"/>
        
      </Switch>
     
      
    </div>
  );
}

export default App;

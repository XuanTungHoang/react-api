import './App.css';
import React, { Component } from 'react';
import Menu from './components/Menu/Menu';
import routes from './routes';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Menu />
          <div>
            <div className="row">
              {this.onShowContentMenus(routes)}
            </div>
          </div>
        </div>
      </Router>
    );
  }
  onShowContentMenus = (routes) => {
    var result = null;
    if(routes.length > 0 ){
      result = routes.map((item, index) => {
        return (
          <Route key={index} path={item.path} exact={item.exact} component={item.component} />
        )
      })
    }
    return <Switch>{result}</Switch>
  }
}

export default App;

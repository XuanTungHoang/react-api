import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';


const Menus = [
  {
    name: 'Trang chủ',
    to: '/',
    exact: true
  },
  {
    name: 'Quản lí sản phẩm',
    to: '/product-list',
    exact: false
  }
]

const MenuLink = ({name, to, activeOnlyWhenExact}) => {
  return (
    <Route 
      path={to}
      exact={activeOnlyWhenExact}
      children={({match}) => {
        var active = match ? 'active' : '';
        return (
          <li className={active} >
            <Link to={to}>
              {name}
            </Link>
          </li>
        )
      }}
    />
  )
}

class Menu extends Component {
    
    render() {
        return (
            <div className="navbar navbar-default">
            <ul className="nav navbar-nav">
              {this.showMenus(Menus)}
            </ul>
          </div>
        );
    }

    showMenus = (menus) => {
      var result = null;
      if(menus.length > 0) {
        result =  menus.map((item, index)=>{
          return (
            <MenuLink
              key={index}
              name={item.name}
              to={item.to}
              activeOnlyWhenExact={item.exact}
            />
          )
        })
      }
      return result;
    }
}

export default Menu;
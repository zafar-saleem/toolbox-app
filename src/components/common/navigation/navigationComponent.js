import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Home from '../../admin/home/homeComponent';
import Dashboard from '../../admin/home/homeComponent';
import Employees from '../../admin/employees/employeesComponent';
import Tool from '../../admin/tool/toolComponent';

import './navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <div className='navigation'>
        <ul>
          <li><Link to={`${this.props.match.path}/home`} className={(this.props.location.pathname.split('/')[2] === 'home') ? 'active' : 'inactive'}>Home</Link></li>
          <li><Link to={`${this.props.match.path}/employees`} className={(this.props.location.pathname.split('/')[2] === 'employees') ? 'active' : 'inactive'}>Employees</Link></li>
          <li><Link to={`${this.props.match.path}/app`} className={(this.props.location.pathname.split('/')[2] === 'app') ? 'active' : 'inactive'}>Add Tool</Link></li>
        </ul>
        <Route path={`${this.props.match.path}/home`} component={Dashboard} />
        <Route path={`${this.props.match.path}/employees`} component={Employees} />
        <Route path={`${this.props.match.path}/app`} component={Tool} />
      </div>
    );
  }
}

export default Navigation;
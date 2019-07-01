/**
 * Created by Akhtar on 2019-07-01.
 */

import {Component} from 'react';
import auth from '../services/authService';


class Logout extends Component {
  componentDidMount() {
    auth.logout()
    window.location = "/"
  }

  render() {
    return null
  }
}

export default Logout;

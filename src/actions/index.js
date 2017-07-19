import axios from 'axios';
import { browserHistory } from 'react-router';

const ROOT_URL = 'https://dribbble-server-dev.herokuapp.com';

export function signinUser({ email, username, name, password }) {
  return function(dispatch) {

    axios.post(`${ROOT_URL}/create`, { email, username, name, password })
      .then(response => {
        browserHistory.push('/ok');

      })
      .catch(() => {
        console.log("Failed.");
      })
  }
}

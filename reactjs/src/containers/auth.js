import React from 'react';
import API from '../../../API';

export default function container(Component) {
  class AuthContainer extends React.Component {
    state = {
      loggedIn: !!localStorage.getItem('token'),
    }

    logout = () => {
      localStorage.removeItem('token');
      this.setState({ loggedIn: false });
    }

    login = async (username, password) => {
      const { pass, loggedIn } = await API.post('/auth', { username, password });
      localStorage.setItem('token', pass);
      this.setState({ loggedIn });
    }
      
    render() {
      const { loggedIn } = this.state;
      return (
        <Component
          {...this.props}
          loggedIn={loggedIn}
          logout={this.logout}
          login={this.login}
        />
      );
    }
  }
  return AuthContainer;
}

import React from 'react';
import API from '../../../API';

export default function container(Component) {
  return class UsersContainer extends React.Component {
    state= {
      users: {},
    }

    getUser = async (id) => {
      const user = await API.get(`users/${id}`);
      this.setState({ user });
    }

    saveUser = async (user) => {
      if (user.id) {
        return API.put(`/users/${user.id}`, user);
      }

      return API.user('/users', user);
    }

    deleteUser = async (id) => {
      await API.delete(`/users/${id}`);
    }

    render() {
      const { user } = this.state;
      return (
        <Component
          {...this.props}
          user={user}
          getUser={this.getUser}
          saveUser={this.saveUser}
          deleteUser={this.deleteUser}
        />
      );
    }
  };
}
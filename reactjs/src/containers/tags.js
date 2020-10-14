import React from 'react';
import API from '../../../API';

export default function container(Component) {
  return class TagsContainer extends React.Component {
    state= {
      tags: {},
    }

    getTag = async (id) => {
      const tag = await API.get(`tags/${id}`);
      this.setState({ tag });
    }

    saveTag = async (tag) => {
      if (tag.id) {
        return API.put(`/tags/${tag.id}`, tag);
      }

      return API.tag('/tags', tag);
    }

    deleteTag = async (id) => {
      await API.delete(`/tags/${id}`);
    }


    render() {
      const { tag } = this.state;
      return (
        <Component
          {...this.props}
          tag={tag}
          getTag={this.getTag}
          saveTag={this.saveTag}
          deleteTag={this.deleteTag}
        />
      );
    }
  };
}
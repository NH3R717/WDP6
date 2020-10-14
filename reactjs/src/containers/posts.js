import React from 'react';
import API from '../../../API';

export default function container(Component) {
  return class PostsContainer extends React.Component {
    state= {
      posts: {},
    }

    getPost = async (id) => {
      const post = await API.get(`posts/${id}`);
      this.setState({ post });
    }

    savePost = async (post) => {
      if (post.id) {
        return API.put(`/posts/${post.id}`, post);
      }

      return API.post('/posts', post);
    }

    deletePost = async (id) => {
      await API.delete(`/posts/${id}`);
    }


    render() {
      const { post } = this.state;
      return (
        <Component
          {...this.props}
          post={post}
          getPost={this.getPost}
          savePost={this.savePost}
          deletePost={this.deletePost}
        />
      );
    }
  };
}
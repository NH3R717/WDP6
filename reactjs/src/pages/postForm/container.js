import { connect } from 'react-redux';
import { getOneByIdPost, addPost, deletePost } from '../../store/posts/actions';

function mapStateToProps(state, props) {
  // get the id from the route params
  const { match: { params: { id } } } = props;
  const {
    posts: {
      byId: {
        [id]: posts,
      },
    },

  } = state;
  const posts = posts.map(postId => byId[postId]);
  return { user };
}
const mapDispatchToProps = { getOneByIdPost, addPost, deletePost };
export default connect(mapStateToProps, mapDispatchToProps);
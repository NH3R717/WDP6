import { connect } from 'react-redux';
import {
  getAllPosts, addPost, getOneByIdPost, deletePost
} from '../../store/posts/actions';

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const {
    posts: {
      byId: {
        [id]: post,
      },
    },
  } = state;
  return { post };
}

const mapDispatchToProps = {
  getAllPosts, addPost, getOneByIdPost, deletePost
};
export default connect(mapStateToProps, mapDispatchToProps);
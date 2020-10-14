import { connect } from 'react-redux';
import {
  getAllPosts, addPost
} from '../../store/users/actions';

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
  getAllPosts, addPost,
};
export default connect(mapStateToProps, mapDispatchToProps);
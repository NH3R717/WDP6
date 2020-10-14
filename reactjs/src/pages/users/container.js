import { connect } from 'react-redux';
import {
   getOneByIdUser, getAllUsers, addUser, deleteUser
} from '../../store/users/actions';

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const {
    users: {
      byId: {
        [id]: user,
      },
    },
  } = state;
  return { user };
}

const mapDispatchToProps = {
    getOneByIdUser, getAllUsers, addUser, deleteUser
};
export default connect(mapStateToProps, mapDispatchToProps);
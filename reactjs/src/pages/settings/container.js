import { connect } from 'react-redux';
import {
   addUser
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
   addUser
};
export default connect(mapStateToProps, mapDispatchToProps);
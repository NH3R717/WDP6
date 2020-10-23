import { connect } from 'react-redux';
import { registerUser } from '../../store/auth/actions';

function mapStateToProps(state) {
  const { auth: { loggedIn } } = state;
  return { loggedIn };
}

const mapDispatchToProps = { registerUser };
export default connect(mapStateToProps, mapDispatchToProps);
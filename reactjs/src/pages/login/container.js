import { connect } from 'react-redux';
import { loginUser } from '../../store/auth/actions';

function mapStateToProps(state) {
  const { auth: { loggedIn } } = state;
  return { loggedIn };
}

// ! Check it out.

const mapDispatchToProps = { loginUser };
export default connect(mapStateToProps, mapDispatchToProps);
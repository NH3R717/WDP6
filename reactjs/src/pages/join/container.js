import { connect } from 'react-redux';
import { login } from '../../store/auth/actions';

function mapStateToProps(state) {
  const { auth: { loggedIn } } = state;
  return { loggedIn };
}

const mapDispatchToProps = { login };
export default connect(mapStateToProps, mapDispatchToProps);
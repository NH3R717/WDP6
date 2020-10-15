import { connect } from 'react-redux';
import {
  getAllTags
} from '../../store/tags/actions';

function mapStateToProps(state, props) {
  const { match: { params: { id } } } = props;
  const {
    tags: {
      byId: {
        [id]: tag,
      },
    },
  } = state;
  return { tag };
}

const mapDispatchToProps = {
  getAllTags
};
export default connect(mapStateToProps, mapDispatchToProps);
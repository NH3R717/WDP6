import { connect } from 'react-redux';
import {
  getOneByIdTag, addTag, deleteTag
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
  getOneByIdTag, addTag, deleteTag
};
export default connect(mapStateToProps, mapDispatchToProps);
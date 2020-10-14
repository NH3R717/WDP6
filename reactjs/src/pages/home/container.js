import { connect } from 'react-redux';
import {
//   the pertinent functions (getThing, addThing)
} from 'the store action file';
// } from '../../store/place/actions';

function mapStateToProps(state, props) {

const mapDispatchToProps = {
//   the pertinent functions (getThing, addThing)
};

//     function mapStateToProps(state, props) {
//   const { match: { params: { id } } } = props;
//   const {
//     choices: {
//       byId: {
//         [id]: choice,
//       },
//     },
//   } = state;
//   return { choice };
// }
    
      return { choice };
}
export default connect(mapStateToProps, mapDispatchToProps);
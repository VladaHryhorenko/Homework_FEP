import {connect} from "react-redux";
import ButtonSection from '../components/ButtonSection';
import { actionSetColor } from "../actions/counter"

const mapStateToProps = (state) => ({
    counter: state.b.count
});
const mapDispatchToProps = {
    actionSetColor: actionSetColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSection);
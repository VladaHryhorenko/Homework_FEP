import {connect} from "react-redux";
import ButtonSection from '../components/ButtonSection';
import {actionSetColor} from "../actions/buttonAction";

const mapStateToProps = (state) => ({
    color: state.b.color
});
const mapDispatchToProps = {
    actionSetColor: actionSetColor,
};

export const ButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonSection);
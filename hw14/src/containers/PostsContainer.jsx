import {connect} from "react-redux";
import PostsSection from '../components/PostsSection';
import {actionSetPosts} from "../actions/postsAction";

const mapStateToProps = (state) => (
    {
    posts: state.p.posts
});

const mapDispatchToProps = {
    actionSetPosts: actionSetPosts,
};

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsSection);
import React from "react";
import { connect } from "react-redux";
import { css } from "emotion";
import Post from "../componets/Post";
import * as actions from "../actions";
import globalStyles from "../utils/globalStyles";
import ViewTitle from "./ViewTitle";
import PostListTools from "./PostListTools";
import AddNewPost from "./AddNewPost";

const PostListStyles = css`
  border-top: 0.125em dotted ${globalStyles.color.darkGray};
  padding-top: 1em;

  @media (min-width: 48em) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const PostList = props => {
  return (
    <div>
      <ViewTitle content="The List" />
      <PostListTools />
      <AddNewPost />
      <ul className={PostListStyles} data-class="PostListStyles">
        {props.posts.map(post => <Post key={post.id} postContent={post} />)}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  loadpost: dispatch(actions.loadPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);

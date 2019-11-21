import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/fetchPosts";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.state.map(post => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <UserHeader userID={post.userId} />
      </div>
    ));
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

const mapStateToProps = state => {
  return { state: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);

import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/fetchUsers";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUsers(this.props.userID);
  }

  renderUser() {
    if (!this.props.user) {
      return null;
    }

    return this.props.user.name;
  }

  render() {
    return (
      <div>
        <h3>{this.renderUser()}</h3>
        <hr></hr>
      </div>
    );
  }
}

const mapStateToProps = ({ users }, ownProps) => {
  const user = users.find(user => user.id === ownProps.userID);
  return { user: user };
};

export default connect(mapStateToProps, { fetchUsers })(UserHeader);

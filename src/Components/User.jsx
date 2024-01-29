import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/sinhashlok");
    const json = await res.json();

    this.setState({ userInfo: json });
  }

  render() {
    const { avatar_url, name, location, html_url, twitter_username } =
      this.state.userInfo;
    const { email } = this.props;

    return (
      <div className="user-card">
        <img className="user-card-logo" src={avatar_url} alt="User Avatar" />
        <div className="user-card-info">
          <h2>Name: {name}</h2>
          <h3>Location: {location}</h3>
          <h3>Contact: {email}</h3>
          <div className="user-card-social">
            <h3>
              <a href={html_url}>GitHub</a>
            </h3>
            <h3>
              <a href={`https://twitter.com/${twitter_username}`}>Twitter</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default User;

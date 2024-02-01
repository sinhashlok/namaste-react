import React from "react";
import UserContext from "../utils/UserContext";

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
      <div className="border-2 border-indigo-600 rounded-md flex p-2 max-md:text-sm">
        <img
          className="rounded-md w-[150px] mr-2 max-md:w-[100px] max-md:h-[100px]"
          src={avatar_url}
          alt="User Avatar"
        />
        <div className="mt-auto">
          <h2 className="text-xl font-semibold">
            {name}{" "}
            <UserContext.Consumer>
              {(data) => {
                return data.loggedIn !== undefined ? "🟢" : "";
              }}
            </UserContext.Consumer>
          </h2>
          <h3>Location: {location}</h3>
          <h3>Contact: {email}</h3>
          <div className="flex">
            <h3 className="text-indigo-500 font-semibold pr-2">
              <a href={html_url}>GitHub</a>
            </h3>
            <h3 className="text-indigo-500 font-semibold">
              <a href={`https://twitter.com/${twitter_username}`}>Twitter</a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default User;

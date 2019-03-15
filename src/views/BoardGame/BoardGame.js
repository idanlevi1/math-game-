import React from "react";
import { observer, inject } from "mobx-react";
import BoardGameView from "./BoardGameView";

@inject("userStore")
@observer
class BoardGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: []
    };
  }

  componentDidMount = async () => {
    let allUsers = await this.props.userStore.getAllUsers;
    allUsers = allUsers.val();
    let usersData = this.getUserDataList(allUsers);
    usersData = this.sortUsersByStars(usersData);
    this.setState({ usersData });
  };

  getUserDataList = allUsers => {
    return Object.keys(allUsers).map(key => {
      const { stars, coins, userLevels, avatar, name } = allUsers[key];
      return {
        currentUser: key === this.props.userStore.getUser.appId,
        stars,
        coins,
        name,
        avatar,
        userLevels: userLevels ? userLevels.length : 0
      };
    });
  };

  sortUsersByStars = usersData => {
    return usersData.sort((a, b) => b.stars - a.stars);
  };

  render() {
    return (
      <BoardGameView
        usersData={this.state.usersData}
        navigation={this.props.navigation}
      />
    );
  }
}

export default BoardGame;

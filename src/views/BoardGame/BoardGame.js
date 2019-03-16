import React from "react";
import { observer, inject } from "mobx-react";
import BoardGameView from "./BoardGameView";

@inject("userStore")
@observer
class BoardGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: [],
      currentUser: null
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
      if (key === this.props.userStore.getUser.appId) {
        this.setState({ currentUser: allUsers[key] });
      }
      return {
        appId: key,
        stars,
        coins,
        name,
        avatar,
        userLevels: userLevels ? userLevels.length : 0
      };
    });
  };

  sortUsersByStars = usersData => {
    return usersData.sort((a, b) => {
      const starsRes = b.stars - a.stars;
      if (starsRes === 0) {
        const userLevels = b.userLevels - a.userLevels;
        if (userLevels === 0) {
          return b.coins - a.coins;
        }
        return userLevels;
      }
      return starsRes;
    });
  };

  render() {
    return (
      <BoardGameView
        usersData={this.state.usersData}
        currentUser={this.state.currentUser}
        navigation={this.props.navigation}
      />
    );
  }
}

export default BoardGame;

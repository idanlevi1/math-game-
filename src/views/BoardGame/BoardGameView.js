import React from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import styles from "./BoardGameStyle";
import BackButton from "../buttons/BackButton";

const wallBackground = require("../../../assets/images/wallTorkiz.jpg");

const UserItem = ({ userData, index, currentUser }) => {
  const { stars, coins, userLevels, appId } = userData;
  return (
    <View
      style={[
        styles.userItemContainer,
        currentUser.appId === appId && styles.currentUser
      ]}
    >
      <Text style={[styles.userItemText, { flex: 0.5 }]}>{index}</Text>
      <ProfileDetails user={userData} />
      <Text style={styles.userItemText}>{stars}</Text>
      <Text style={styles.userItemText}>{coins}</Text>
      <Text style={styles.userItemText}>{userLevels}</Text>
    </View>
  );
};

const ProfileDetails = ({ user }) => (
  <View style={styles.userDetails}>
    {user.avatar ? (
      <Image
        style={styles.avatar}
        resizeMode="contain"
        source={{ uri: user.avatar }}
      />
    ) : (
      <View style={[styles.avatar, styles.backgroundAvatar]} />
    )}
    <Text style={[styles.userItemText, { flex: 0 }]}>
      {user.name ? user.name : "-"}
    </Text>
  </View>
);

const BoardGameView = props => {
  const { usersData, navigation, currentUser } = props;
  return (
    <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
      {currentUser ? (
        <React.Fragment>
          <View style={styles.container}>
            <View style={styles.header}>
              {currentUser && (
                <View style={styles.profileDetailsContainer}>
                  <ProfileDetails user={currentUser} />
                </View>
              )}
              <Text style={styles.title}>Board Game</Text>
              <View style={{ flex: 1 }} />
            </View>
            <View style={styles.tableHeader}>
              <Text style={[styles.headerText, { flex: 0.5 }]}>#</Text>
              <Text style={styles.headerText}>User</Text>
              <Text style={styles.headerText}>Stars</Text>
              <Text style={styles.headerText}>Coins</Text>
              <Text style={styles.headerText}>Level</Text>
            </View>
            <FlatList
              data={usersData}
              renderItem={({ item, index }) => (
                <UserItem
                  userData={item}
                  index={index}
                  currentUser={currentUser}
                />
              )}
              keyExtractor={(item, i) => i.toString()}
            />
          </View>
        </React.Fragment>
      ) : (
        <View style={styles.spinner}>
          <ActivityIndicator size="large" color="#FFFFFF" />
        </View>
      )}
      <View style={styles.bottomLine}>
        <BackButton navigation={navigation} />
      </View>
    </ImageBackground>
  );
};

export default BoardGameView;

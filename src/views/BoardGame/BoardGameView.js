import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Image
} from "react-native";
import styles from "./BoardGameStyle";
import BackButton from "../buttons/BackButton";

const wallBackground = require("../../../assets/images/wallTorkiz.jpg");

const UserItem = ({ userData ,index }) => {
  const { stars, coins, name, avatar, userLevels, currentUser } = userData;
  return (
    <View style={[styles.userItemContainer, currentUser && styles.currentUser ]}>
      <Text style={[styles.userItemText, { flex: 0.5 }]}>{index}</Text>
      <View style={styles.userDetails}>
        {avatar ? (
          <Image
            style={styles.avatar}
            resizeMode="contain"
            source={{ uri: avatar }}
          />
        ) : (
          <View style={[styles.avatar, styles.backgroundAvatar]} />
        )}
        <Text style={[styles.userItemText, { flex: 0 }]}>
          {name ? name : "-"}
        </Text>
      </View>
      <Text style={styles.userItemText}>{stars}</Text>
      <Text style={styles.userItemText}>{coins}</Text>
      <Text style={styles.userItemText}>{userLevels}</Text>
    </View>
  );
};

export default (BoardGameView = props => {
  const { usersData, navigation } = props;
  return (
    <ImageBackground style={styles.backgroundContainer} source={wallBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Board Game</Text>
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
            <UserItem userData={item} index={index} />
          )}
          keyExtractor={(item, i) => i.toString()}
        />
      </View>
      <View style={styles.bottomLine}>
        <BackButton navigation={navigation} />
      </View>
    </ImageBackground>
  );
});

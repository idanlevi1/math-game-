import React, { Component } from "react";
import { View, Text, TouchableOpacity, ImageBackground, Modal, Dimensions } from "react-native";
const { width } = Dimensions.get("screen");
import AnimatableIcon from '../components/AnimatableIcon'
import BackButton from '../buttons/BackButton'
import styles from './LevelStyle'
import * as Progress from 'react-native-progress';

class LevelView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      levelTime: 1,
      fullTime: 1,
      intervalId: null,
      finish: false,
      won: false,
    };
  }

  componentDidMount() {
    let levelTime = this.props.level.time + this.props.shoppingTime - 1 ;
    var intervalId = setInterval(this.timer, 1000);
    this.setState({ levelTime, intervalId, fullTime: levelTime });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  timer = () => {
    let levelTime = this.state.levelTime - 1;
    if(levelTime >= 0) 
        this.setState({ levelTime });
    else {
      clearInterval(this.state.intervalId);
      this.setState({ finish: true });
      this.props.onPlayerLost()
    }
  };

  closeModal = () => {
    this.setState({finish:false})
    this.props.navigation.goBack();
  }

  render() {
    const { level, coins, stars, userLevelDetails, sound, onPlayerWon, onPlayerLost, onCheckLevel, navigation } = this.props;
    return (
      <ImageBackground
      style={styles.backgroundContainer}
      source={require('../../images/wall.jpg')}
      >
        <View style={styles.progressBar}>
          <AnimatableIcon name={'ios-clock-outline'} />
          <View style={{marginHorizontal: 5,}}/>
          <Progress.Bar 
          progress={this.state.levelTime / this.state.fullTime} 
          width={width*0.75}
          height={30}
          color={'#09419b'}
          unfilledColor={'#becfea'}
          />
        </View>
        <Text style={[styles.titleModal,{color:'#09419b'}]}>{this.state.levelTime} Second left</Text>
        <View style={styles.bottomLine}>
          <BackButton navigation={navigation}/>
        </View>
        
        {this.state.finish &&
        <Modal
          visible={this.state.finish}
          animationType={'slide'}
          transparent
          onRequestClose={this.closeModal}
          >
            <ImageBackground style={styles.modalContainer} source={require('../../images/modalBackground.jpeg')}>
                <Text style={styles.titleModal}>{this.state.won ? 'WON!' : 'LOST!'} </Text>
                <Text style={styles.subtitleModal}>{this.state.won ? 'bla bla winner!' : 'bla bla - loser!'}</Text>        
                <TouchableOpacity
                rounded
                style={styles.buttonModal}
                onPress={() => { this.closeModal() }}
                >
                    <Text style={styles.subtitleModal}>Close</Text>
                </TouchableOpacity>
            </ImageBackground>
        </Modal>
        }
      </ImageBackground>
    );
  }
}

export default LevelView;

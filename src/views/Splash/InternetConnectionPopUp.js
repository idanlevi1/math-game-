import React, { Component } from 'react';
import {View, Text, StyleSheet, NetInfo, Dimensions, Modal, Image} from 'react-native';
const { height, width } = Dimensions.get('window');
import { appColors } from "../colors";

export default class InternetConnectionPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {connectionInfo: ''}
        this.handleFirstConnectivityChange = this.handleFirstConnectivityChange.bind(this);
    }
    handleFirstConnectivityChange(connectionInfo) {
        this.setState({connectionInfo: connectionInfo.type})
    }

    componentDidMount() {
        NetInfo.getConnectionInfo().then((connectionInfo) => {
            this.setState({connectionInfo: connectionInfo.type})
        });
        NetInfo.addEventListener('connectionChange',this.handleFirstConnectivityChange);
    }

    componentWillUnmount() {
        NetInfo.removeEventListener('connectionChange', this.handleFirstConnectivityChange);
    }

    render() {
        const { connectionInfo } = this.state
        if(connectionInfo == 'none'){
            return (<View>
                <Text style={styles.container}>.</Text>
                <Modal
                visible={true}
                animationType={'slide'}
                transparent
                onRequestClose={() => {}}
                >
                    <View style={styles.modalContainer}>
                        <Text style={[styles.buttonText,{fontSize: 26}]}>Opss...</Text>
                        <Text style={styles.buttonText}>No connections are available</Text>
                        <Image 
                        style={{width:50,height:50}} 
                        resizeMode='contain'
                        source={{uri:'http://debitcardcasino.ca/wp-content/uploads/2018/08/internet-network-disconnect.png'}}
                        />
                    </View>
                </Modal>
                <Text style={styles.container}>.</Text>
            </View>)
        }
        else
            return null
            
        }
    }
    
const styles = StyleSheet.create({
    container :{
        backgroundColor: appColors.lionColor,
        height:height,
        width:width,
    },
    modalContainer: {
        paddingTop: "25%",
        marginTop: "40%",
        height: height*0.35,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
        backgroundColor: '#FFF',
        width: '70%',
        borderWidth:3,
        borderRadius:10,
        zIndex:9999,
        borderColor:'#000'
      },
      buttonText: {
        paddingVertical: 10,
        color: appColors.lionOrangeDark,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
      },
})
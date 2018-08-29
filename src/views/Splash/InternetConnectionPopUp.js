import React, { Component } from 'react';
import {View, Text, StyleSheet, NetInfo, Dimensions, Modal} from 'react-native';
const { height, width } = Dimensions.get('window');

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
                        <Text style={[styles.buttonText,{fontSize: 22}]}>שגיאה</Text>
                        <Text style={styles.buttonText}>האינטרנט במכשיר לא זמין</Text>
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
        backgroundColor: '#2E4A62',
        height:height,
        width:width,
    },
    modalContainer: {
        marginTop: "40%",
        marginBottom: "30%",
        justifyContent: 'center',
        alignSelf:'center',        
        backgroundColor: '#B4B7BA',
        width: '70%',
        borderWidth:2,
        borderRadius:15,
        zIndex:9999,
        borderColor:'red'
      },
      buttonText: {
        padding: 15,
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center"
      },
})
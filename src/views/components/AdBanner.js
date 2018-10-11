import React from 'react';
import { AdMobBanner } from 'expo';
import { View, StyleSheet } from 'react-native';

export default AdBanner = (props) => {
    const styles = StyleSheet.create({
        adBanner: {
        marginTop: props.marginTop ? marginTop : 20,
        alignSelf: "center",
        },
    })

    return ( 
        <View style={styles.adBanner}>
            <AdMobBanner
            bannerSize={props.bannerType ? props.bannerType : "banner"}
            adUnitID="ca-app-pub-1289259032515994/8810586795"
            onDidFailToReceiveAdWithError={(err)=>{console.log('error banner',err)}}
            />
        </View>
     );
}
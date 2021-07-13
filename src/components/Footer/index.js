import React from 'react';
import {View,SafeAreaView} from 'react-native'
import Heart from '../../assets/svg/heart';
import Message from '../../assets/svg/message';
import Cross from '../../assets/svg/cross';
import Marker from '../../assets/svg/marker';
import {WIDTH} from 'constants';
const Footer = () => {
    return(
    <SafeAreaView style={{backgroundColor:'white',alignItems:'center',width:WIDTH,flex:0.05}}>
        <View style={{justifyContent:'space-between',flexDirection:'row',width:WIDTH*.90,marginTop:10}}>
        <Heart/>
        <Message/>
        <Cross/>
        <Marker/>
        </View>
    </SafeAreaView>
    )
}
export default Footer;
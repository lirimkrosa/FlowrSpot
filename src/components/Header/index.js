import React from 'react';
import {View,SafeAreaView} from 'react-native';
import Logo from '../../assets/svg/logo';
import Dots from '../../assets/svg/dots';
import GoBack from '../../assets/svg/goback';
import {WIDTH} from 'constants';
const Header = ({goBack,navigation}) => {
    return(

    <SafeAreaView style={{backgroundColor:'white',alignItems:'center',flex:0.07,width:WIDTH}}>
        <View style={{justifyContent:'space-between',flexDirection:'row',width:WIDTH*.95,alignItems:'center'}}>
                <GoBack/>
                <Logo/>
                <Dots/>
        </View>
    </SafeAreaView>
    )
}

export default Header;
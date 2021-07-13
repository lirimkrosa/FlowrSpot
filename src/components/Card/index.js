import React from 'react';
import {View,Text,ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Star from '../../assets/svg/star'
const Card = ({item}) => {
    return (
        <View  style={{flex:1,width: '45%',height: 200,backgroundColor:'white',margin: 10,borderRadius:10}}>
            <ImageBackground source={{uri:item.picture}} style={{width:'100%',height:'100%'}}  imageStyle={{ borderRadius: 10}}>
            <LinearGradient colors={['rgba(0,0,0,0.8)', 'transparent']} style={{position: 'absolute',bottom:0, width:'100%',height:'100%',borderRadius:10}} start={{x:0.2,y:1}} end={{x:0,y:0}}>
                <View style={{flex:1,justifyContent: 'space-around',flexDirection: 'column',height:'100%'}}>
                    <View style={{flex:1, alignSelf: 'flex-end'}}>
                        <Star/>
                    </View>
                    <View style={{flex:1, alignItems:'center',justifyContent: 'center'}}>
                        <Text style={{fontSize:23,color:'white',fontFamily:'Ubuntu'}}>{item.title}</Text>
                        <Text style={{fontSize:12,color:'white',fontFamily:'Ubuntu', opacity:0.7}}>{item.subtitle}</Text>
                        
                    </View>
                    <View style={{width:'50%',height:30,backgroundColor:'rgba(0, 0, 0, 0.5)', alignSelf:'center',borderRadius:20,marginBottom:20,justifyContent:'center',alignItems: 'center'}}>
                    <Text style={{color:'white', fontFamily:'Ubuntu',fontSize:13}}>{item.sightings} sightings</Text>
                    </View>
                </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
};

export default Card;
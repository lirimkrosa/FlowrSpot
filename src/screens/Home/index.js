import React from 'react';
import {View,Text, ImageBackground,ScrollView,TextInput,FlatList} from 'react-native'
import {Header,Footer,Card} from 'components';
import GlobalStyle from 'globalstyle'
import {WIDTH,HEIGHT} from 'constants';
import Search from '../../assets/svg/search';

const Home = (props) => {

    const Data = [
        { id:1,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:2,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:3,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:4,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:5,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:6,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:7,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:8,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:9,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
        { id:10,title:'Ballon Flower',subtitle:'Platycodon grandiflorus',sightings:127, picture:'https://i.imgur.com/8CypPeY.png' },
     
    ]

    return(
        <React.Fragment>
        <Header props={props}/>
            <ScrollView style={{flex:1}} fadingEdgeLength={100}>
                <View style={GlobalStyle.container}>
                <ImageBackground source={require("../../assets/pl-hero.png")} style={{justifyContent:'space-evenly',alignItems:'center', alignContent:'center', width:WIDTH,height:HEIGHT*.45}}>
                    <Text style={{color:'white',fontSize:30,fontFamily:'Ubuntu', width:'50%',textAlign:'center'}}>Discover flowers around you</Text>
                    <Text style={{color:'white',fontSize:18,fontFamily:'Ubuntu'}}>Explore between more than 8.427 sightings</Text>
                    <View style={{height:'14%', width:WIDTH*.85, backgroundColor:'white',borderRadius:5, justifyContent:'space-between',alignItems:'center',flexDirection:'row',paddingLeft:15,paddingRight:15}}>
                        <TextInput style={{fontFamily:'Ubuntu',flex:2}} placeholder='Looking for something specific?'/>
                        <Search/>
                    </View>
                </ImageBackground>
                    <FlatList
                    numColumns={2}
                    style={{flexDirection:'column',padding:10,width:WIDTH}}
                    data={Data}
                    renderItem={Card}
                    keyExtractor={item => item.id}
                    />
                </View>
            </ScrollView>
        <Footer/>
        </React.Fragment> 
    )
}
export default Home;
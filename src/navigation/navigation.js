import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Home} from 'screens'



const Stack = createStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator headerMode="Home" >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

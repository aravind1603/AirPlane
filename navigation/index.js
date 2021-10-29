import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Airplane from '../screens/airplane/AirPlane'
import SeatingView from '../screens/seating/SeatingView'

export default Navigator = () => {

    const Stack = createNativeStackNavigator();

    return(
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="AirplaneSeatingInput" component={Airplane} />
              <Stack.Screen name="SeatingView" component={SeatingView} />
            </Stack.Navigator>  
        </NavigationContainer>
    )
}
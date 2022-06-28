import React from "react";
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Favorite } from '../screens/Favorite';
import { Pokedex } from '../screens/Pokedex';
import { Account } from '../screens/Account';

const Tab = createBottomTabNavigator();

export function Navigation() {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Favorite' component={ Favorite } 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='heart' color={color} size={size}/>
                    ),
                }}/>
            <Tab.Screen name='Pokedex' component={ Pokedex }
                options={{
                    tabBarLabel: '',
                    tabBarIcon: () => renderPokeball(),
                }}
            />
            <Tab.Screen name='Account' component={ Account }
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='user' color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

const renderPokeball = () => {
    return(
        <Image 
            source={require('../assets/pokedex.png')}  
            style={{ width:75, height: 75, top:-22 }}  
        />
    )
}
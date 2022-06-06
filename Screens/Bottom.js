import React from 'react'
import { View,Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'

const TabA=()=>{
    return(
        <View>
            <Text>Haii form Tab A</Text>
        </View>
    )
}
const TabB=()=>{
    return(
        <View>
            <Text>Haii form Tab B</Text>
        </View>
    )
}
const TabC=()=>{
    return(
        <View>
            <Text>Haii form Tab C</Text>
        </View>
    )
}

const Tab=createBottomTabNavigator()
const NavTab=()=>{

    return(
        <NavigationContainer>

        <Tab.Navigator>
            <Tab.Screen name="tabA" component={TabA} options={{
                tabBarIcon:({color,size})=>(
                    <AntDesign name='home' color={color} size={size} />
                )
            }} />
            <Tab.Screen name="tabB" component={TabB} options={{
                tabBarIcon:({color,size})=>(
                    <AntDesign name='user' color={color} size={size} />
                )
            }} />
            <Tab.Screen name="tabC" component={TabC} options={{
                tabBarIcon:({color,size})=>(
                    <AntDesign name='user' color={color} size={size} />
                )
            }} />
        </Tab.Navigator>
        </NavigationContainer>
    )
}
export default NavTab;
import Profile from '../profile'
import Home from '../home'
import Orders from '../orders'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {AntDesign, FontAwesome5} from '@expo/vector-icons'

import React from 'react'

const Tab=createBottomTabNavigator()
const BottomNavigation=()=>{
  return(
    
    <Tab.Navigator 
     initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false,
        tabBarInactiveTintColor:"grey",
        
      }}>
       <Tab.Screen name='My Desire' component={Home} options={{
         tabBarActiveTintColor:"#e91e63",
       tabBarIcon:({color,size})=>(
        <AntDesign size={24} color='blue' name='home' />
       )
       
       }}/>
       <Tab.Screen name='Orders' component={Orders} options={{
         tabBarActiveTintColor:"#e91e63",
       tabBarIcon:({color,size})=>(
        <AntDesign size={24} color='blue' name='shoppingcart' />
       )
       
       }} />
       <Tab.Screen name='Profile' component={Profile} options={{
         tabBarActiveTintColor:"#e91e63",
       tabBarIcon:({color,size})=>(
        <FontAwesome5 size={24} color='blue' name='user-circle' />
       )
       
       }}/>
     </Tab.Navigator>
    )
}
export default BottomNavigation;
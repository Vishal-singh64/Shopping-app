import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import Login from './Screens/Auth/Login';
import SignUp from './Screens/Auth/SignUp';
import React from 'react'
import ProfileMenu from './Screens/ProfileMenu';
import BottomNavigation from './Screens/Auth/TabNav';
import OtpVerification from './Screens/OtpVerify/OptVerification';

const Stack=createNativeStackNavigator()
const Index=()=>{
    return(
<NavigationContainer>
<Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="SignIn" component={Login} />
    <Stack.Screen name="OTP" component={OtpVerification} />
    <Stack.Screen name="Home" component={BottomNavigation} />
    <Stack.Screen name="ProfileMenu" component={ProfileMenu} />
</Stack.Navigator>
</NavigationContainer>

    )
}

export default Index;
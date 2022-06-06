import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import React from 'react'
import {View,Image,Text,TouchableOpacity  } from 'react-native'
import Form from './AuthCompon/form'
import {LoginForm,LogoHolder,Btns,DirectBtns} from './AuthStyle'

const Login=({navigation})=>{

    return(
        <LoginForm>
        <LogoHolder source={require('../../assets/Logo1.png')}/>
        
        <Form iconName="phone" iconColor="blue" placeholderName="Phone Number"/>
        {/* <Form iconName="user" iconColor="blue" placeholderName="Email Address"/>
        <Form iconName="key" iconColor="blue" placeholderName="Password"/> */}
        <Btns style={{backgroundColor:"pink"}} onPress={()=>navigation.navigate('OTP')}>
        <Text>Get OTP</Text>
        </Btns>
        {/* <Text>Or</Text>
        <DirectBtns style={{backgroundColor:"whitesmoke"}}>
        <AntDesign name='google' color="red" size={24} style={{paddingRight:5}} />
        <Text>Google</Text>
        </DirectBtns>
        <DirectBtns style={{backgroundColor:"royalblue"}}>
        <AntDesign name='facebook-square' color='blue' size={24} style={{paddingRight:5}} />
        <Text>Facebook</Text>
        </DirectBtns>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text style={{color:"blue"}} >Don't have account</Text>
        </TouchableOpacity> */}
        </LoginForm>
    )
}
export default Login;
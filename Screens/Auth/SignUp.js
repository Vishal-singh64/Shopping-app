
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import {View,Image,Text,TouchableOpacity  } from 'react-native'
import Form from './AuthCompon/form'

import {LoginForm,LogoHolder,Btns,DirectBtns} from './AuthStyle'

const SignUp=({navigation})=>{

    return(
        <LoginForm>
        <LogoHolder source={require('../../assets/Logo1.png')}/>
        <Form iconName="user" iconColor="blue" placeholderName="Email Address"/>
        <Form iconName="idcard" iconColor="blue" placeholderName="Full Name"/>
        <Form iconName="key" iconColor="blue" placeholderName="Password"/>
        <Btns style={{backgroundColor:"pink"}} onPress={()=>navigation.navigate('Home')}>
        <Text>Sign Un</Text>
        </Btns>
        <Text>Or</Text>
        <Text>sign up with</Text>
        <DirectBtns style={{backgroundColor:"whitesmoke"}}>
        <AntDesign name='google' color="red" size={24} style={{paddingRight:5}} />
        <Text>Google</Text>
        </DirectBtns>
        <DirectBtns style={{backgroundColor:"royalblue"}}>
        <AntDesign name='facebook-square' color='blue' size={24} style={{paddingRight:5}} />
        <Text>Facebook</Text>
        </DirectBtns>
       
        </LoginForm>
    )
}
export default SignUp;
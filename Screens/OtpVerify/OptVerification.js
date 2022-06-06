import { AntDesign } from '@expo/vector-icons'
import React,{useState} from 'react'
import { View,Text,TextInput } from 'react-native'
import Form from '../Auth/AuthCompon/form'
import { Btns, LoginForm } from '../Auth/AuthStyle'
import Home from '../home'


import { FormView,OtpContainer,LogoHolder,FormData, OtpInput,
     ResentOtp, ResentOtpTimer } from './Style/OtpScreenStyle'

const OtpVerification=({navigation})=>{
    const [OtpTimer, setOtpTimer] = useState(30)

    
    
    return(
        <LoginForm>
         <LogoHolder source={require('../../assets/Logo1.png')}/>
         
            <OtpInput placeholder='- - - -' />
            <ResentOtpTimer>resend Otp in :{OtpTimer} sec</ResentOtpTimer>
            <Btns style={{backgroundColor:"pink"}}
             onPress={()=>navigation.navigate('Home')}>
        <Text>Verify</Text>
        </Btns>
        <ResentOtp> 
        <Text>Resend Otp</Text>
        </ResentOtp>
        </LoginForm>

           
        
    )
}
export default OtpVerification;
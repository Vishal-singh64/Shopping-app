import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { View,TouchableOpacity,Text,StyleSheet } from 'react-native';
import {AuthBtn,AuthBtnView,BtnLogo} from '../AuthStyle'
    const Btns=({iconName,iconColor,btnColor,btnName})=>{
    return(
        <AuthBtnView>
            
        <BtnLogo>
        
        <AntDesign name={iconName} color={iconColor} size={24} />
        </BtnLogo>
       /
        </AuthBtnView>
      
    
    )
}
export default Btns;
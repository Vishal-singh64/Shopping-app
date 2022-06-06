import { AntDesign } from '@expo/vector-icons';
import React  from 'react'
import { View,TextInput} from 'react-native'
import {FormView,FormIcon} from "../AuthStyle"
const Form=({placeholderName,iconName,iconColor,...rest})=>{

    return(
        <FormView>
        <FormIcon>
        <AntDesign name={iconName} color={iconColor} size={24} />
        </FormIcon>
        <TextInput placeholder={placeholderName} />
        </FormView>
       
    )
}

export default Form;
import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import { Text ,TouchableOpacity,ScrollView,View,FlatList} from 'react-native'

import { CloseBtn, ProductView } from '../styles/homeStyle'
import { ModalCont,ProductImg} from '../styles/homeStyle'

const UpdateModal=(props)=>{
    const DATA=[
        {
            id:1,
            img:'../../assets/Post.jpg',
        },
        {
            id:2,
            img:'../../assets/Post.jpg',
        },
        {
            id:3,
            img:'../../assets/Post.jpg',
        },
        {
            id:4,
            img:'../../assets/Post.jpg',
        },
    ]
    
    const closeModal=()=>{
        props.setmodalpop(false)
    }

    return( 
     <ModalCont>
     {/* <FlatList horizontal
     keyExtractor={(item)=>item.id} 
     dat={DATA}
         renderItem={
             <ProductImg source={require(DATA.img)} />
         }
     /> */}

         
         <CloseBtn onPress={()=>closeModal(false)} >
         <AntDesign name='close' size={24} color="red"/>
             <Text>Close</Text>
         </CloseBtn>
     </ModalCont>
    ) 
 }
 export default UpdateModal;
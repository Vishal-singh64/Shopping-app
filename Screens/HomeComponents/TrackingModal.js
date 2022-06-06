import React,{useState} from 'react'
import { Text ,TouchableOpacity} from 'react-native'
import { ModalBody,ModalCont} from '../styles/TrackingModalStyle'

const TrackingModal=(props)=>{
    
    const closeModal=()=>{
        props.setmodalpop(false)
    }

    return( 
     <ModalCont>
         <Text>Haii testinh</Text>
         <TouchableOpacity onPress={()=>closeModal(false)} >
             <Text>Close</Text>
         </TouchableOpacity>
     </ModalCont>
    ) 
 }
 export default TrackingModal;
import React, {useState} from 'react';
import { View,Text,Image,TouchableOpacity,Modal } from 'react-native';
import TrackingModal from './HomeComponents/TrackingModal';
import { Line, OrderCard,
     ProfieImg, TextData, UserInfo,Quantit, TeackingBtn, ModalBody, ModalCont } from './styles/OrderStyle';


const Orders=()=>{

    const [modalpop, setmodalpop] = useState(false)
    

    return(
        

        <OrderCard>
            <TextData>Customer name</TextData>
        <UserInfo>
            <ProfieImg source={require('../assets/user.jpg')} />
            <Line></Line>
<Quantit>
    <TextData>Qt :23 | Size : M -38 </TextData>
</Quantit>
        </UserInfo>
<TeackingBtn onPress={()=>{setmodalpop(true)}}><TextData>Tracking Id</TextData></TeackingBtn>
<ModalBody transparent={true} visible={modalpop}
 animationType='fade' onRequestClose={()=>setmodalpop(false)}>
<TrackingModal setmodalpop={setmodalpop} />
</ModalBody>
        </OrderCard>
        
    );
}
export default Orders;
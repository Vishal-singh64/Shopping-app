import { Entypo,AntDesign,FontAwesome5 } from '@expo/vector-icons';
import React,{useState} from 'react'
import {TouchableOpacity,View,Text} from 'react-native';
import { DataCard, ProfieImg, ProfileTimeName, TextData, UserInfo,TimeData, 
    PostImg,
 MenuBtn,DownloadPost,SocialShare,SocialIcon,
 LikeBody,LikeData } from '../styles/homeStyle'
import UpdateModal from './UpdateMenu';
import {ModalBody} from '../styles/TrackingModalStyle'
import { Modal } from 'react-native';

    const PostCard=()=>{
        const [modalpop, setmodalpop] = useState(false)

        return(
            <DataCard>
                <UserInfo>

                    <ProfieImg source={require('../../assets/user.jpg')} />
                    <ProfileTimeName>
                        <TextData>Name here</TextData>
                        <TimeData>4 hours..</TimeData>
                    </ProfileTimeName>
                    <MenuBtn onPress={()=>setmodalpop(true)} >
                    
                        <Entypo name='menu' size={32} color="blue" />
                    
                    </MenuBtn>

                    <Modal transparent={true} visible={modalpop} 
                    animationType="slide" onRequestClose={()=>setmodalpop(false)}>
                        <UpdateModal setmodalpop={setmodalpop}/>
                    </Modal>
                </UserInfo>
                <PostImg source={require('../../assets/Post.jpg')} />
            
                {/* <LikeBody>
                <AntDesign name='hearto' size={18} color='red' />
                <LikeData>3.5K</LikeData>
                </LikeBody> */}
                <SocialIcon>

                <DownloadPost>
                    <AntDesign name='download' size={32} color="blue" />
                </DownloadPost>
                <SocialShare>
                    <TouchableOpacity>
                        <Entypo name='facebook' size={32} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity>

                        <FontAwesome5 name='whatsapp-square' size={32} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AntDesign name='sharealt' size={32} color="blue" />
                    </TouchableOpacity>
                </SocialShare>
                </SocialIcon>
                </DataCard>
            
         
           
            
        );
    }
    export default PostCard;
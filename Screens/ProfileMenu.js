import React,{useState} from 'react'
import { Text,TextInput,Modal} from 'react-native'
import {Feather,AntDesign} from '@expo/vector-icons'
import { ProfileMenuView,ProfileMenuContainer,LogoContainer, ParentContainer, ProfileDataUpdate, ProfileIcon, BtnHolder, Bton, ModalBody, ModalUploadBtn, ModalText } from './styles/ProfileMenuStyle'
import {  LogoHolder, ProfileData, ProfileName, ProfileView } from './styles/profilestyle'

const ProfileMenu=()=>{
    const [modalopen, setmodalopen] = useState(false)

    const ProfileSetting=({iconName,placeholdername,...rest})=>{
        return(
            <ProfileDataUpdate>
            <ProfileIcon>
            <AntDesign name={iconName} color='black' size={24} />
            </ProfileIcon>
            <TextInput placeholder={placeholdername} />
            </ProfileDataUpdate>
        )
    }

    const UploadPictureModal=()=>{
        
        return(
            
                <ModalBody>
                <ModalUploadBtn>
                <ModalText>
                Take form camera
                </ModalText>
                   
                </ModalUploadBtn>
                <ModalUploadBtn>
                    <ModalText>
                    Upload grom Gallary
                    </ModalText>
                </ModalUploadBtn>
                <ModalUploadBtn onPress={()=>{setmodalopen(false)}}>
                    <ModalText>
                    Cancel
                    </ModalText>
                </ModalUploadBtn>

                </ModalBody>
            
        )
    }

    return(
        <ParentContainer>

        <ProfileMenuContainer>

        <ProfileMenuView>
        <ProfileView source={require('../assets/user.jpg')} />
        <LogoContainer onPress={()=>{setmodalopen(true)}}>
        <Modal transparent={true} visible={modalopen} 
                    animationType="slide" onRequestClose={()=>setmodalopen(false)} >
                        <UploadPictureModal></UploadPictureModal>
                    </Modal>

        <Feather name='camera' size={24} color='white' />
        </LogoContainer>
        </ProfileMenuView>
        </ProfileMenuContainer>
        <ProfileSetting iconName='user' placeholdername='Vishal Singh' />
        <ProfileSetting iconName='phone' placeholdername='+91-6280645754' />
        <ProfileSetting iconName='mail' placeholdername='vs598480@gmail.com' />
        <ProfileSetting iconName='earth' placeholdername='Ludhiana, Punjab' />

        <BtnHolder>
            <Bton>
                <Text>Save</Text>
            </Bton>
            <Bton>
                <Text>Cancil</Text>
            </Bton>
        </BtnHolder>
        
        

        </ParentContainer>
       
    )
}
export default ProfileMenu;
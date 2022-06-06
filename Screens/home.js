import { Entypo,AntDesign,Fontisto } from '@expo/vector-icons';
import React from 'react'
import {View,Text,Image,TouchableOpacity} from 'react-native';
import PostCard from './HomeComponents/Card';
import { Container } from './styles/homeStyle';


const Home=()=>{

    return(
        <Container>
           <PostCard /> 
            
        </Container>
        
    );
}
export default Home;
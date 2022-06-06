import { Feather } from '@expo/vector-icons';
import React from 'react'
import { View,FlatList,ScrollView} from 'react-native';


import { ProfileView ,ProfileTopView,ProfileName,ProfilePhone
    ,ProfileData,BorderLine,PostBox,
    DataName,DataCount,PostData,LogoHolder,
     ProductPictures,ProductName,ProductArea} from './styles/profilestyle';

const Profile=({navigation})=>{
    const Products=[
        {
            prname:"Shirt0",
            index:1,
        },
        {
            prname:"shirt1",
            index:2,
        },
        {
            prname:"shirt2",
            index:3,
        },
        {
            prname:"shirt3",
            index:4,
        },
        {
            prname:"shirt5",
            index:5,
            
        },
        {
            prname:"shirt6",
            index:6,
            
        },
        {
            prname:"shirt7",
            index:7,
            
        },
        {
            prname:"shirt8",
            index:8,
            
        },
        {
            prname:"shirt9",
            index:9,
            
        },
        {
            prname:"shirt10",
            index:10,
            
        },
        {
            prname:"shirt11",
            index:11,
            
        },
        {
            prname:"shirt12",
            index:12,
            
        },
        {
            prname:"shir13",
            index:13,
            
        },
        {
            prname:"shirt14",
            index:14,
            
        },
        {
            prname:"shirt15",
            index:15,
            
        },
        {
            prname:"shirt16",
            index:16,
            
        },
        {
            prname:"shirt17",
            index:17,
            
        },
        {
            prname:"shirt18",
            index:18,
            
        },


    ]

    return(
        
        <View>
        {/* <ScrollView> */}
        <LogoHolder onPress={()=>navigation.navigate('ProfileMenu')}>

        <Feather name='menu' color="pink" size={24} />
        </LogoHolder>
        <ProfileTopView>
    <ProfileView source={require('../assets/user.jpg')} />
        
        <ProfileData>

        <ProfileName>Arick Lancer</ProfileName>
        <ProfilePhone>6280781270</ProfilePhone>
        </ProfileData>
        </ProfileTopView>
        <BorderLine>

        </BorderLine>
        <PostData>

        <PostBox>
            <DataCount>23</DataCount>
            <DataName>Post</DataName>
        </PostBox>
        <PostBox>
            <DataCount>23</DataCount>
            <DataName>Followers</DataName>
        </PostBox>
        </PostData>
        <BorderLine>

        </BorderLine>
        

        <ProductArea>
        {/* <ScrollView>

        {Products.map((data,index)=>(
            <View>
            <ProductPictures>
                <ProductName>
                {data.prname}
              
                </ProductName>
                </ProductPictures>
            </View>
        ))
        }
        </ScrollView> */}
       <FlatList 
            keyExtractor={key=>key.index}
            // numColumns={2}
            data={Products}
            horizontal={true}
            renderItem={({item})=>{
                return(    
                <ProductPictures>
                <ProductName>
                {item.prname}
              
                </ProductName>
                </ProductPictures>
                   
                    
                )
            }}
        /> 
            
        </ProductArea>
            


        {/* </ScrollView> */}
        </View>
        
    );
}
export default Profile;
import styled from "styled-components/native";

export const Container=styled.View`
background-color: whitesmoke;
margin-top: 50px;

`
export const UserInfo=styled.View`
flex-direction: row;
margin: 5px;

`
export const TextData=styled.Text`
color: green;
font-size: 18px;
margin-left: 10px;
margin-top: 5px;
`
export const TimeData=styled.Text`
color:grey;
margin-left: 10px;
margin-top: 5px;
font-size: 12px;
`

export const ProfieImg=styled.Image`
border-radius: 30px;
height: 60px;
width: 60px;
`
export const DataCard=styled.View`
background-color: whitesmoke;

margin: 5px;

`
export const ProfileTimeName=styled.View`
flex-direction: column;
`
export const PostImg=styled.Image`
background-color: blue;
height: 250px;
width:100%;
margin-top:10px ;
justify-content: space-between;
`
export const MenuBtn=styled.TouchableOpacity`
position: absolute;

right:25px ;
`
export const SocialShare=styled.View`

flex-direction: row;
justify-content: space-between;
width: 40%;
position: absolute;
right:30px;
`
export const DownloadPost=styled.TouchableOpacity`

`
export const SocialIcon=styled.View`
flex-direction: row;

margin:15px;
`
export const LikeBody=styled.TouchableOpacity`
position: absolute;
bottom: -55%;
padding: 20px;
`
export const LikeData=styled.Text`
color: red;
`
export const CloseBtn=styled.TouchableOpacity`
flex-direction: row;
padding: 10px;
color: red;
`
export const ModalCont=styled.View`

height: 50%;
width: 100%;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
background-color: greenyellow;
padding: 20px;
position: absolute;
bottom: 0;
`
export const ProductView=styled.View`
flex-direction: row;

`

export const ProductImg=styled.Image`
height: 25%;
width: 25%;
border-radius: 10px;
position: absolute;
background-color: green;
`
import styled from "styled-components/native";

export const OrderCard=styled.View`
background-color: pink;
margin: 10px;
border-radius: 20px;
padding: 10px;
margin-top: 50px;
height: 22%;
color: blue;

`
export const ProfieImg=styled.Image`
border-radius: 30px;
height: 60px;
width: 60px;
margin-top: 5px;
`
export const UserInfo=styled.View`
flex-direction: row;
margin: 0px;
align-items: center;
justify-content: center;

`
export const TextData=styled.Text`
color: whitesmoke;
font-size: 16px;
margin-left: 0px;
`
export const Line=styled.View`
border-bottom-width:1px;
width: 80%;
margin: 5px;
margin-top: 20px;

`
export const Quantit=styled.View`
color:white;
position: absolute;
flex-direction: row;
left: 80px;
top: 15px;
font-size: 28px;

`
export const TeackingBtn=styled.TouchableOpacity`
background-color: palevioletred;
padding: 3px;
width: 150px;
justify-content: center;
align-items: center;
border-radius: 5px;
margin-left: 20%;
`
export const ModalBody=styled.Modal`
justify-content:center;
align-items: center;
align-self:center;
background-color: rgba(0,0,0,0.5);
`
import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

function Profile({name,img,open}) {
  return (
    <>
    {open && <View style = {s.container}>
        <View style ={s.header}>
            <View>
                <Image style = {s.avatar} source={{uri: `https://i.pravatar.cc/${img}`}}></Image>
            </View>
            <View style = {s.texts}>
                <Text style = {s.name}>{name} TheFresher</Text>
                <Text>Hiii Welcome to the world</Text>
            </View>
        </View>

        <View style = {s.social}>
            <Image style = {s.pic} source={{uri: "https://www.bing.com/th?id=OIP.uQlQc1ej3xTRMpywzGuFvAHaHw&w=150&h=157&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}}></Image>
            <Image style = {s.pic} source={{uri: "https://www.bing.com/th?id=OIP.uQlQc1ej3xTRMpywzGuFvAHaHw&w=150&h=157&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}}></Image>
            <Image style = {s.pic} source={{uri: "https://www.bing.com/th?id=OIP.uQlQc1ej3xTRMpywzGuFvAHaHw&w=150&h=157&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}}></Image>
            <AntDesign name="twitter" size={24} color="black" />
            <AntDesign name="twitter" size={24} color="tomatored"/>
            <AntDesign name="twitter" size={24} color="springgreen" />
        </View>
    
    </View>}
    </>
  )
}
const s = StyleSheet.create({
    container: {
        margin: 25,
        borderRadius: 20,
        padding: 20,
        backgroundColor: "white",
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.54,
        shadowRadius: 15.45,
    },
    avatar:{
        width: 70,
        height: 70,
        borderRadius: 50
    },
    header: {
        flexDirection: "row",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold"
    },
    texts: {
        paddingLeft: 15,
        flex: 1
    },
    social: {
        flexDirection: "row",
        justifyContent: "space-around",
        margin: 20
    },
    pic: {
        height: 30,
        width: 30
    }
})
export default Profile
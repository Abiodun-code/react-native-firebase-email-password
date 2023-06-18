import React from "react"
import { View, Text, TouchableOpacity } from "react-native"
import { authentification } from "../fireConfig"
import { signOut } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"

const HomeScreen = ()=>{
  const navigation = useNavigation()

  const handleSignOut=()=>{
    signOut(authentification)
    .then(()=>{
      navigation.replace("Login")
    })
    .catch(error => alert(error.message))
  }
  return(
    <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{ fontSize: 28}}>Welcome to the Home Screen</Text>
      <Text style={{fontSize: 20, fontWeight: "bold" }}>Email: {authentification.currentUser?.email}</Text>
      <TouchableOpacity onPress={handleSignOut} style={{width: "80%", backgroundColor: "#07b2f9", marginTop: 16, padding: 15, }} activeOpacity={0.5}>
        <Text style={{ color: "white", fontSize: 20, textAlign: "center" }}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
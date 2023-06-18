import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from "react-native"
import { authentification } from "../fireConfig"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { useNavigation } from "@react-navigation/native"

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = ()=>{
    createUserWithEmailAndPassword(authentification, email, password)
      .then((userCredientials: { user: any }) => {
        const user = userCredientials.user;
        setEmail("")
        setPassword("")
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  const handleSignIn = ()=>{
    signInWithEmailAndPassword(authentification, email, password)
      .then((userCredientials: { user: any }) => {
        const user = userCredientials.user;
        setEmail("")
        setPassword("")
      })
      .catch((error: { message: any }) => alert(error.message))
  }

  useEffect(()=>{
    authentification.onAuthStateChanged(user => {
      if(user){
        navigation.navigate("Home")
      }
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={text=>setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={text=>setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSignIn} style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={handleSignUp } style={[styles.button, styles.buttonOutline]}>
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    fontSize: 16,
    color: "#07b2f9"
  },
  buttonContainer: {
    width: "80%"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#07b2f9",
    padding: 15,
    borderRadius: 10,
    marginTop: 15
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: "white",
    borderColor: "#07b2f9",
    borderWidth: 2
  },
  buttonOutlineText: {
    color: "#07b2f9",
    fontWeight: "700",
    fontSize: 16
  }
})
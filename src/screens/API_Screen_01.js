import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from "react-native";
import React from "react";
import { useState } from "react";

function API_Screen_01({navigation}) {
  const [name, setName] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img_logo} source={require('../img/Logo.png')} />
      </View>
      <View style={styles.body}>
        <Text style={{ color: '#8353E2', fontSize: 24, fontWeight: 700 }}>MANAGER YOUR TASK</Text>
        <View style={styles.input}>
            <Image style={styles.icon_input} source={require('../img/mail.png')} />
            <TextInput
                value={name}
                onChangeText={setName}
                style={styles.text_input}
                placeholder="  Enter your name"
            />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('API_Screen_02', name)}}>
            <Text style={styles.btn_text}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default API_Screen_01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE1E62B',
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flex: 2,
    backgroundColor: "#0000",
    justifyContent: "center",
  },
  img_logo: {
    width: 271,
    height: 271,
    resizeMode: "contain",
  },
  body: {
    width: "90%",
    flex: 2,
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    width: "100%",
    justifyContent: "center",
  },
  icon_input: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 10,
},
    text_input: {
        fontSize: 16, 
        fontWeight: 400,
        borderColor: '#BCC1CA',
        color: '#BCC1CA',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 10,
        paddingLeft: 40,
    },
  footer: {
    flex: 1,
  },
  btn: {
    backgroundColor: "#00BDD6",
    width: 190,
    height: 44,
    borderRadius: 4,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
},
btn_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
},
});

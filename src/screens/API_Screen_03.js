import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, {useState} from "react";

function addPost(job){
    fetch('https://6545f2e7fe036a2fa9550166.mockapi.io/todolist',{
        method: 'POST',
        body: JSON.stringify({
            name: job
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
        .then(response => response.json())
        .then(json => console.log(json));
}

function API_Screen_03({ navigation, route }) {
  var obj = route.params;
  var [text, setText] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_infor}>
          <View style={styles.infor}>
            <Image
              style={styles.icon_avatar}
              source={require("../img/user.png")}
            />
            <View style={{ flexDirection: "column", marginRight: 10 }}>
              <Text style={{ fontWeight: 700, fontSize: 20, paddingLeft: 20 }}>
                Hi {obj}
              </Text>
              <Text> Have agrate day a head</Text>
            </View>
          </View>
          <TouchableOpacity
          onPress={() => {
            navigation.navigate("API_Screen_02");
          }}
        >
            <Image style={styles.icon_back} source={require("../img/back.png")} />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text
          style={{
            fontWeight: 700,
            fontSize: 32,
            marginTop: 50,
            marginBottom: 30,
          }}
        >
          ADD YOUR JOB
        </Text>
        <TouchableOpacity style={styles.input}>
            <Image style={styles.icon} source={require("../img/calendar.png")} />
          <TextInput style={styles.text_input} placeholder="Input your job" onChangeText={newText => setText(newText)}/>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => addPost(text)}
        >
          <Text style={styles.btn_text}>FINISH</Text>
        </TouchableOpacity>
        <Image style={styles.img} source={require("../img/Logo.png")} />
      </View>
    </View>
  );
}

export default API_Screen_03;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE1E62B",
  },
  header: {
    // flex: 1,
  },
  header_infor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 40,
    marginTop: 10,
  },
  infor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon_back: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  icon_avatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  body: {
    flex: 4,
    alignItems: "center",
  },
  input: {
    width: "90%",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 10,
  },
  text_input: {
    fontSize: 20,
    fontWeight: 400,
    borderColor: "#BCC1CA",
    color: "#BCC1CA",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingLeft: 40,
  },
  btn: {
    backgroundColor: "#00BDD6",
    width: 190,
    height: 44,
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
  },
  img: {
    width: 190,
    height: 190,
    resizeMode: "contain",
  },
});

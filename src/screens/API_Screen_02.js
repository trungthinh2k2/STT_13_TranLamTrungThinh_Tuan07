import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native-web";

function API_Screen_02({ navigation, route }) {
  const name = route.params;
  var [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://6545f2e7fe036a2fa9550166.mockapi.io/todolist")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_infor}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("API_Screen_01");
          }}
        >
             <Image style={styles.icon_back} source={require("../img/back.png")} />
        </TouchableOpacity>
          <View style={styles.infor}>
            <Image
              style={styles.icon_avatar}
              source={require("../img/user.png")}
            />
            <View style={{ flexDirection: "column", marginRight: 10 }}>
              <Text style={{ fontWeight: 700, fontSize: 20, paddingLeft: 20 }}>
                Hi {name}
              </Text>
              <Text> Have agrate day a head</Text>
            </View>
          </View>
        </View>
        <View style={styles.search}>
          <Image
            style={styles.icon_search}
            source={require("../img/search.png")}
          />
          <TextInput style={styles.input_search} placeholder="Search" />
        </View>
      </View>
      <View style={styles.body}>
        <ScrollView>
        {data.map((item) => {
          return (
            <View style={styles.list}>
              <View style={{ flexDirection: "row", marginLeft: 15 }}>
                <AntDesign name="checksquareo" size={20} color="green" />
                <Text
                  style={{ marginLeft:10, fontWeight: 700, fontSize: 16, }} >
                  {item.name}
                </Text>
              </View>
              <SimpleLineIcons name="note" size={20} color="red" style={{ marginRight: 10 }} />
            </View>
          );
        })}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            navigation.navigate("API_Screen_03", name);
          }}
        >
          <Image style={styles.icon_plus} source={require("../img/plus.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default API_Screen_02;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DEE1E62B",
  },
  header: {
    flex: 2,
  },
  header_infor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  infor: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  icon_back: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    marginLeft: 20,
  },
  icon_avatar: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  search: {
    width: "90%",
    justifyContent: "center",
    marginLeft: 20,
    marginBottom: 20,
  },
  icon_search: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    marginLeft: 10,
  },
  input_search: {
    width: "100%",
    height: 40,
    borderColor: "#BCC1CA",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 40,
  },
  body: {
    flex: 5,
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    height: "50px",
    width: "85%",
    borderRadius: "10px",
    justifyContent: "space-between",
    marginBottom: "20px",
    marginLeft: 28,
  },
  footer: {
    flex: 2,
    alignItems: "center",
    zIndex: 1,
  },
  icon_plus: {
    width: 69,
    height: 69,
    resizeMode: "contain",
  },
});

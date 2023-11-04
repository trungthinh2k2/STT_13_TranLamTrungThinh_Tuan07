import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import API_Screen_01 from "./src/screens/API_Screen_01";
import API_Screen_02 from "./src/screens/API_Screen_02";
import API_Screen_03 from "./src/screens/API_Screen_03";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="API_Screen_01" component={API_Screen_01} options={{ headerShown: false }}/>
        <Stack.Screen name="API_Screen_02" component={API_Screen_02} options={{ headerShown: false }}/>
        <Stack.Screen name="API_Screen_03" component={API_Screen_03} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
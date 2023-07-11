import { StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

import Apply from "./Apply";
import Profile from "./Profile";
import Services from "./Services";

import { Header } from "../../src/components";

export default function Layout() {
  return (
    <>
      <StatusBar hidden={false} barStyle={"light-content"} />
      <Header />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0000cc",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="home"
                size={24}
                color={focused ? "#0000cc" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Apply"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="form"
                size={24}
                color={focused ? "#0000cc" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Services"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="profile"
                size={24}
                color={focused ? "#0000cc" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                size={24}
                color={focused ? "#0000cc" : "gray"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

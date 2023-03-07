import { StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import Header from "../../src/components/Header";

export default function Layout() {
  return (
    <>
      <StatusBar hidden={false} barStyle={"light-content"} />
      <Header />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0000cc",
          headerTintColor: "#0000cc",
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            headerStyle: {
              borderBottomColor: "transparent",
              shadowColor: "transparent",
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerTitle: "Home",
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
            headerTitle: "Apply",
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
            headerTitle: "Services",
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
            headerTitle: "Profile",
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

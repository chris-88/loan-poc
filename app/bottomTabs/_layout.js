import { StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <>
      <StatusBar hidden={false} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#0000cc",
          headerTintColor: "#0000cc",
        }}
      >
        <Tabs.Screen
          name="home"
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
          name="apply"
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
          name="services"
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
          name="profile"
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

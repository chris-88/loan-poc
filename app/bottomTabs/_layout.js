import { StatusBar } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

export default function Layout() {
  return (
    <>
      <StatusBar hidden={false} />
      <Tabs
        initialRouteName="apply"
        screenOptions={{
          // headerShown: false,
          tabBarActiveTintColor: "blue",
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
                color={focused ? "blue" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="apply"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="form"
                size={24}
                color={focused ? "blue" : "gray"}
              />
            ),
            // headerShown: false,
          }}
        />
        <Tabs.Screen
          name="services"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="profile"
                size={24}
                color={focused ? "blue" : "gray"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="user"
                size={24}
                color={focused ? "blue" : "gray"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

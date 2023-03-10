import { Animated, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import accounts from "./accounts";
import payments from "./payments";
import cards from "./cards";

function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: "row", backgroundColor: "white" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            style={{
              flex: 1,
              backgroundColor: isFocused ? "#00ffc5" : "#efefef",
              padding: 6,
              marginHorizontal: 6,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              marginTop: 6,
            }}
          >
            <Animated.Text
              style={{
                color: isFocused ? "#0000cc" : "black",
                fontFamily: "OpenSans_600SemiBold",
                fontSize: 14,
              }}
            >
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Accounts"
        component={accounts}
        // options={{ backgroundColor: "white" }}
      />
      <Tab.Screen name="Payments" component={payments} />
      <Tab.Screen name="Cards" component={cards} />
    </Tab.Navigator>
  );
}

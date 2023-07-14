import { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import ListItem from "../../../../src/components/ListItem";

const DATA = [
  { id: 1, title: "Report lost or stolen", icon: "credit-card-off-outline" },
  { id: 2, title: "Replace damaged card", icon: "credit-card-refresh-outline" },
  { id: 3, title: "View card PIN", icon: "credit-card-settings-outline" },
  { id: 4, title: "set up apple pay", icon: "apple" },
];

export default function Cards() {
  const [frozen, setFrozen] = useState(false);
  const router = useRouter();
  const onPress = () => {
    setFrozen((previousState) => !previousState);
    if (!frozen) {
      router.replace({
        pathname: "/modals/ThankYou",
        params: {
          title: "Card frozen",
          icon: "snowflake-off",
          message:
            "Your card has been frozen. You can unfreeze it at any time right here in the app.",
          next: "/main/Home",
        },
      });
    }
  };
  const frozenText = !frozen ? "Freeze card" : "Card frozen";
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: "white" }}>
      {/* Card image - should eventually be a horizontal scroll view of all customer cards */}
      <Image
        source={require("../../../../src/assets/images/debit-card.png")}
        style={styles.card}
      />

      {/* Freeze Card button */}
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: "center",
          padding: 12,
          backgroundColor: "#00ffc5",
          marginBottom: 8,
          flexDirection: "row",
          borderRadius: 6,
          // borderColor: "#0000cc",
          // borderWidth: !frozen ? 0 : 3,
        }}
      >
        <MaterialCommunityIcons
          name={!frozen ? "snowflake" : "snowflake-off"}
          size={24}
          color="#0000cc"
        />
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
            color: "#0000cc",
            textAlign: "center",
            marginLeft: 16,
          }}
        >
          {frozenText}
        </Text>
      </TouchableOpacity>

      {/* Card options list */}
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            icon={item.icon}
            focus={item.id == 1 ? true : false}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  button: {
    alignItems: "center",
    padding: 12,
    backgroundColor: "#efefef",
    marginBottom: 8,
    flexDirection: "row",
    borderRadius: 6,
  },
  text: {
    fontFamily: "OpenSans_400Regular",
    fontSize: 16,
    color: "black",
    textAlign: "center",
    marginLeft: 16,
  },
  card: {
    height: "40%",
    aspectRatio: 1,
    resizeMode: "contain",
    margin: 16,
    alignSelf: "center",
  },
});

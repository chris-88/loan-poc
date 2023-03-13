import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import { useState } from "react";

export default function Cards() {
  const router = useRouter();
  const [frozen, setFrozen] = useState(false);
  const onPress = () => {
    setFrozen((previousState) => !previousState);
  };
  const frozenText = !frozen ? "Freeze card" : "Card frozen";
  return (
    <View style={styles.root}>
      <Image
        source={require("../../../src/assets/images/debit-card.png")}
        style={styles.card}
      />
      <TouchableOpacity
        onPress={onPress}
        style={{
          alignItems: "center",
          padding: 12,
          backgroundColor: !frozen ? "#0000cc" : "red",
          marginBottom: 8,
          flexDirection: "row",
          borderRadius: 6,
        }}
      >
        <MaterialCommunityIcons
          name={!frozen ? "snowflake" : "snowflake-off"}
          size={24}
          color="white"
        />
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
            color: "white",
            textAlign: "center",
            marginLeft: 16,
          }}
        >
          {frozenText}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="credit-card-off-outline"
          size={24}
          color="#0000CC"
        />
        <Text style={styles.text}>Report lost or stolen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="credit-card-refresh-outline"
          size={24}
          color="#0000CC"
        />
        <Text style={styles.text}>Replace damaged card</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Ionicons name="ios-key-outline" size={24} color="#0000CC" />
        <Text style={styles.text}>View card PIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesome5 name="apple-pay" size={24} color="#0000CC" />
        <Text style={styles.text}>Set up apple pay</Text>
      </TouchableOpacity>
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

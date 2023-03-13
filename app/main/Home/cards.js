import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Cards() {
  const router = useRouter();
  return (
    <View style={styles.root}>
      <Image
        source={require("../../../src/assets/images/debit-card.png")}
        style={styles.card}
      />
      <TouchableOpacity style={styles.button}>
        <Ionicons name="snow-outline" size={24} color="#0000CC" />
        <Text style={styles.text}>Freeze card</Text>
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

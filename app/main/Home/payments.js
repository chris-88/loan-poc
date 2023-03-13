import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

const DATA = [
  { id: 1, title: "Send money or pay a bill" },
  { id: 2, title: "Transfer between my account" },
  { id: 3, title: "Standing orders" },
  { id: 4, title: "Manage payees" },
  { id: 5, title: "Mobile top up" },
  { id: 6, title: "Direct debits" },
  { id: 7, title: "Future dated payments" },
  { id: 8, title: "Pay to mobile" },
];

export default function Payments() {
  const router = useRouter();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 12,
          backgroundColor: "#0000cc",
          marginBottom: 8,
          flexDirection: "row",
          borderRadius: 6,
        }}
      >
        <MaterialIcons name="send" size={24} color="white" />
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
            color: "white",
            textAlign: "center",
            marginLeft: 16,
          }}
        >
          Send money or pay a bill
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons name="transfer" size={24} color="#0000CC" />
        <Text style={styles.text}>Transfer between my account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="bookmark-border" size={24} color="#0000CC" />
        <Text style={styles.text}>Standing orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons
          name="label-important-outline"
          size={24}
          color="#0000CC"
        />
        <Text style={styles.text}>Direct debits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="calendar-clock-outline"
          size={24}
          color="#0000CC"
        />
        <Text style={styles.text}>Future dated payments</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="people" size={24} color="#0000CC" />
        <Text style={styles.text}>Manage payees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="mobile1" size={24} color="#0000CC" />
        <Text style={styles.text}>Mobile top up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="send-to-mobile" size={24} color="#0000CC" />
        <Text style={styles.text}>Pay to mobile</Text>
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

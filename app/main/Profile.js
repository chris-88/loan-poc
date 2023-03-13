import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  AntDesign,
} from "@expo/vector-icons";

export default function profile() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <View
        style={{
          height: 200,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#efefef",
            padding: 24,
            borderRadius: 100,
          }}
        >
          <AntDesign name="user" size={60} color="#0000CC" />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <AntDesign name="user" size={24} color="#0000cc" />
        <Text style={styles.text}>Personal details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="mobile1" size={24} color="#0000cc" />
        <Text style={styles.text}>My security devices</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <MaterialCommunityIcons
          name="face-recognition"
          size={24}
          color="#0000cc"
        />
        <Text style={styles.text}>Face ID</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="link" size={24} color="#0000cc" />
        <Text style={styles.text}>Open banking connections</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <AntDesign name="lock" size={24} color="#0000cc" />
        <Text style={styles.text}>Security and Legal</Text>
      </TouchableOpacity>
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
        <AntDesign name="logout" size={24} color="white" />
        <Text
          style={{
            fontFamily: "OpenSans_600SemiBold",
            fontSize: 16,
            color: "white",
            textAlign: "center",
            marginLeft: 16,
          }}
        >
          Log out
        </Text>
      </TouchableOpacity>
      <View
        style={{ alignItems: "center", justifyContent: "center", padding: 16 }}
      >
        <Text
          style={{
            fontFamily: "OpenSans_400Regular",
            fontSize: 14,
            color: "#0000cc",
          }}
        >
          V 8.27
        </Text>
        <Text
          style={{
            fontFamily: "OpenSans_400Regular",
            fontSize: 16,
          }}
        >
          BOI.UBPR33-1
        </Text>
      </View>
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

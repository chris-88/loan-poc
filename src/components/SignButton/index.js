import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function SignButton({ title, version, symbol, onPress }) {
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.button,
          { backgroundColor: version == "PRIMARY" ? "#0000cc" : "transparent" },
        ]}
      >
        <AntDesign
          name={symbol}
          size={24}
          color="#0000CC"
          style={{ position: "absolute", padding: 16 }}
        />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              { color: version == "PRIMARY" ? "white" : "#0000CC" },
            ]}
          >
            {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 16,
  },
  button: {
    padding: 16,
    borderWidth: 1,
    borderColor: "#0000cc",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontFamily: "OpenSans_600SemiBold",
    fontSize: 16,
  },
});

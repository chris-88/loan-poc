import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const ListItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        backgroundColor: "#0000cc",
        borderRadius: 24,
        margin: 16,
      }}
    >
      <Text
        style={{
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 18,
          color: "white",
          textAlign: "center",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default function apply() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        margin: 16,
        padding: 16,
        backgroundColor: "#00ffc5",
        // alignItems: "center",
        // justifyContent: "center",
        borderRadius: 18,
      }}
    >
      <ListItem
        title={"Current account"}
        onPress={() => router.push("/loan/")}
      />
      <ListItem
        title={"Savings account"}
        onPress={() => router.push("/loan/")}
      />
      <ListItem title={"Personal loan"} onPress={() => router.push("/loan/")} />
      <ListItem title={"Mortgage"} onPress={() => router.push("/loan/")} />
    </View>
  );
}

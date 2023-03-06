import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const ListItem = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        backgroundColor: "blue",
        borderRadius: 24,
        margin: 16,
        height: 150,
        width: 150,
      }}
    >
      <Text
        style={{
          fontFamily: "OpenSans_600SemiBold",
          fontSize: 22,
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
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 16,
      }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      <View style={{ flexDirection: "row" }}>
        <ListItem
          title={"Current account"}
          onPress={() => router.push("/loan/")}
        />
        <ListItem
          title={"Savings account"}
          onPress={() => router.push("/loan/")}
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <ListItem
          title={"Personal loan"}
          onPress={() => router.push("/loan/")}
        />
        <ListItem title={"Mortgage"} onPress={() => router.push("/loan/")} />
      </View>
    </ScrollView>
  );
}

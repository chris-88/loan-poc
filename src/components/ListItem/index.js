import { Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function ListItem({ title, icon, focus, back }) {
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          padding: 12,
          backgroundColor: focus ? "#0000cc" : "#efefef",
          marginBottom: 8,
          flexDirection: "row",
          borderRadius: 6,
        }}
        onPress={() => {
          router.replace({
            pathname: "/modals/ThankYou",
            params: {
              title: "Insert Coffee...",
              icon: "coffee-maker-outline",
              message:
                "Please provide your nearest developer with more coffee to ensure this feature is built the next time you see it!",
              next: "/main/Home",
            },
          });
        }}
      >
        <MaterialCommunityIcons
          name={icon}
          size={24}
          color={focus ? "white" : "#0000cc"}
        />
        <Text
          style={{
            fontFamily: focus ? "OpenSans_600SemiBold" : "OpenSans_400Regular",
            fontSize: 16,
            color: focus ? "white" : "black",
            textAlign: "center",
            marginLeft: 16,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

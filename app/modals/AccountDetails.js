import { Text, View } from "react-native";
import { useSearchParams } from "expo-router";

export default function AccountDetails() {
  const params = useSearchParams();
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          backgroundColor: "#0000CC",
          width: "100%",
          height: "15%",
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "OpenSans_600SemiBold",
              fontSize: 26,
              color: "white",
            }}
          >
            {params.account}
          </Text>
          <Text
            style={{
              fontFamily: "OpenSans_400Regular",
              fontSize: 16,
              color: "white",
            }}
          >
            {params.number}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "OpenSans_700Bold",
            fontSize: 32,
            color: "white",
          }}
        >
          {params.amount}
        </Text>
      </View>
    </View>
  );
}
